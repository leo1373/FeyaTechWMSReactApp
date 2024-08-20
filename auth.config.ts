import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {

            const isLoggedIn = !!auth?.user;
            const isOnHomePage = nextUrl.pathname.startsWith("/");

            console.log("leodu: Checking authorized: ")
            console.log(nextUrl)
            console.log(isLoggedIn)
            console.log(isOnHomePage)

            // if (isLoggedIn) {
            //
            //     const callbackUrl = nextUrl.searchParams.get("callbackUrl");
            //
            //     if (callbackUrl) {
            //
            //         console.log("leodu: redirecting to callbackUrl")
            //         console.log(callbackUrl)
            //         return Response.redirect(new URL(callbackUrl || "/", nextUrl))
            //     }
            // }
            //
            // if (isOnHomePage) {
            //
            //     return isLoggedIn;
            // } else if (isLoggedIn) {
            //
            //     const url = new URL("/dummytest", nextUrl)
            //     console.log("leodu: redirecting to dummy test")
            //     console.log(url)
            //     return Response.redirect(url);
            // }
            //
            // return true;
            return isLoggedIn
        },
    },
    session: { strategy: 'jwt' },
    providers: [],
} satisfies NextAuthConfig;
