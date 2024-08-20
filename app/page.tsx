import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";

export default async function Home() {

    const session = await auth();

    return (
        <main>
            Empty Home Page
            <div>
                <p>{session?.user ? "Logged In" : "Logged Out"}</p>
                <p>{session?.user?.email}</p>
                <p>{session?.expires}</p>
            </div>
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <Button type="submit">
                    Sign Out
                </Button>
            </form>
        </main>
);
}
