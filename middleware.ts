
import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {

    console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token);
    const isPrivate = request.nextUrl.pathname.startsWith('/private'); //verifica se a rota é pv
    const isAdmin = request.nextauth.token?.role === 'admin'; //verifica se o user é admin
    if (isPrivate && !isAdmin) {
        return NextResponse.rewrite(new URL('/denied', request.nextUrl));
    }
};  
const callbackOptions: NextAuthMiddlewareOptions={}

export default withAuth( middleware, callbackOptions )

export const config = {
    matcher: '/private'
}