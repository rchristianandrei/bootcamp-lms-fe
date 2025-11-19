import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("Authorization")?.value;

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL(`/login`, req.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL(`/`, req.url));
  }

  return NextResponse.next(); // Allow the request to continue
}
