import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import {User} from "@/lib/type/users/UserType";
import {API_AUTH_LOGIN_URL} from "@/lib/api/api.constants";
import {z} from "zod";

async function authenticateUser(username: string, password: string): Promise<User | undefined> {

    const response = await fetch(API_AUTH_LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })

    if (response.status === 200) {

        return response.json();
    } else {

        const data = await response.json()
        throw new Error(data["description"]);
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {

                console.log("leodu: credentials: ")
                console.log(JSON.stringify(credentials))

                const parsedCredentials = z
                    .object({ username: z.string(), password: z.string().min(6) })
                    .safeParse(credentials);

                console.log("leodu: parsed credentials: " + JSON.stringify(parsedCredentials))

                if (parsedCredentials.success) {

                    console.log("leodu: parsed credentials: " + parsedCredentials)

                    const { username, password } = parsedCredentials.data;
                    const user = await authenticateUser(username, password);

                    console.log("leodu: Logged in user: " + JSON.stringify(user))
                    return user ? user : null;
                }

                return null;
            }
        })
    ],
})
