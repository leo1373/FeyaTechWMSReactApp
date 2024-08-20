import {API_BASE_URL} from "@/lib/api/api.constants";

export async function fetchUsersList() {

    const response = await fetch(`${API_BASE_URL}/user/index`, {
        headers: {
            "Authorization": "Bearer "
        }
    })

    if (response.status === 403) {
        return "Failed to Authenticate"
    } else if (response.status === 500) {
        return "Internal Server Error"
    }

    return response.json()
}