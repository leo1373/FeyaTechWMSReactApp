"use server";

import {signIn} from "@/auth";
import {AuthError} from "next-auth";
import {redirect} from "next/navigation";
import {isRedirectError} from "next/dist/client/components/redirect";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {

    try {

        await signIn('credentials', formData );
    } catch (error) {

        console.log("leodu: catching error")
        console.log(error)

        if (error instanceof AuthError) {

            console.log("leodu: AuthError")

            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return error.cause?.err?.message;
            }
        }

        if (isRedirectError(error)) {

            console.log("Suppressing Default Redirection")
            const originalUrlStr = error.digest.split(";")[2]
            const originalUrl = new URL(originalUrlStr)
            console.log("leodu: retrieved original url from digest")
            console.log(originalUrl)

            const callbackUrl = originalUrl.searchParams.get("callbackUrl")
            console.log("leodu: retrieved callback url from digest")
            console.log(callbackUrl)
            redirect(callbackUrl || originalUrl.origin)

        }

        console.log("leodu: not autherror, rethrowing")
        throw error;

    }
}
