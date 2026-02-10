import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  try {
    // console.log("0000000000");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/auth/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });
    // console.log("1111111111111");
    // console.log(request.headers.get("cookie"));

    if (res.status === 401) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

// Securing page of the application
export const config = {
  matcher: [
    "/",
    "/home/:path*",
    "/chat/:path*",
    "/friends/:path*",
    "/profile/:path*",
    "/reels/:path*",
  ],
};
