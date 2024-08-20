"use client";

import {useFormState} from "react-dom";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {authenticate} from "@/lib/action/auth/authAction";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline";

export function LoginForm() {

    const [errorMessage, formAction, isPending] =
        useFormState(authenticate, undefined);

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your username below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="username"
                                name="username"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" name="password" required/>
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        {errorMessage && (
                            <div className="flex items-center text-sm text-red-500">
                                <ExclamationCircleIcon className="h-5 w-5 mr-2"/>
                                <span>{errorMessage}</span>
                            </div>
                        )}
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
