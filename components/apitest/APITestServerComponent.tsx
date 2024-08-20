import {fetchUsersList} from "@/lib/action/user/userAction";

export default async function APITestServerComponent() {

    const users = await fetchUsersList();

    return (
        <div>
            <h1>API Test Server Component</h1>
            <div>
                {JSON.stringify(users)}
            </div>
        </div>
    )
}
