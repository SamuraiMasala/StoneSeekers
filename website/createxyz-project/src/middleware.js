import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "3c087ab0-61e9-43b8-bba9-42d712f083bd");
  requestHeaders.set("x-createxyz-project-group-id", "08f04c69-be1d-46b8-a3b8-9b1e6fde2cde");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}