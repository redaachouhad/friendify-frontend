import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. EXIT IMMEDIATELY if the user is on an auth page.
  // This ensures the proxy DOES NOT intercept the 401 from your login form.
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  // 2. If no token on a PROTECTED route, redirect to login.
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  try {
    // 3. Verify the token with Spring Boot for protected routes (/home, /profile, etc.)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Cookies: `token=${token}`,
      },
    });

    if (res.status === 401) {
      const response = NextResponse.redirect(
        new URL("/auth/login", request.url),
      );
      response.cookies.delete("token");
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    // If backend is down, don't trap the user
    return NextResponse.next();
  }
}

// Secure pages
export const config = {
  matcher: [
    "/home/:path*",
    "/chat/:path*",
    "/friends/:path*",
    "/profile/:path*",
    "/reels/:path*",
  ],
};
