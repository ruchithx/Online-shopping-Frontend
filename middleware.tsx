import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  // Get the token from the cookie
  const token = await getToken({ req, secret });

  console.log('🛑🛑Token:', token);

  // If no token is found, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Extract roles and other user details from the token
  const { roles } = token;

  const { pathname } = req.nextUrl;

  console.log('🛑🛑roles:', roles);

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!roles || !roles.includes('admin')) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  // Proceed to the next middleware or route
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Define the routes to protect
};
