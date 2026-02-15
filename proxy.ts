import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  console.log("Token from middleware:", token);

  // Public routes
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        // Option A: Send as Cookie (If you updated the filter to read cookies)
        Cookie: `jwt=${token}`,
        // Option B: Send as Authorization Header (Manual mapping)
        // Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

// Securing page of the application
export const config = {
  matcher: [
    "/home/:path*",
    "/chat/:path*",
    "/friends/:path*",
    "/profile/:path*",
    "/reels/:path*",
  ],
};
