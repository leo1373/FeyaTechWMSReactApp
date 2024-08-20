"use client";
import {useGetUserListQuery} from "@/lib/api/user/userApi";

export default function APITestClientComponent() {

    const { data, error, isLoading } = useGetUserListQuery({
        page: 0,
        pageSize: 10
    });

    return (
        <div>
            <h1>API Test Client Component</h1>
            <div>
                {
                    error ? "Error" :
                    isLoading
                        ? "Loading..."
                        : JSON.stringify(data)
                }
            </div>
        </div>
    )
}
