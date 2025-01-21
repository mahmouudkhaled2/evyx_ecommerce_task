import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authPages } from "./lib/utils/auth-pages.util";

export default async function middleware(request: NextRequest) {

  try {
    const token = await getToken({ req: request });
    const url = request.nextUrl.pathname;
    const { origin } = request.nextUrl;
    const privatePages = ["/cart"];

    if (token && authPages.includes(url)) {
      return NextResponse.redirect(new URL("/", origin));
    }

    if (url === "/cart/undefined/checkout") {
      return NextResponse.redirect(new URL("/", origin));
    }

    if (!token && privatePages.includes(url)) {
      return NextResponse.redirect(new URL("/auth/login", origin));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/error", request.nextUrl.origin));
  }
}

export const config = {
  matcher: [ "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)" ],
};