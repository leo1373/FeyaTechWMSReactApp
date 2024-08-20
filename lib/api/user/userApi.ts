import {baseApi} from "@/lib/api/baseApi";
import {GetUserListProp, User} from "@/lib/type/users/UserType";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserList: builder.query<User[], GetUserListProp>({
            query: (params) => ({
                url: "/user/index",
                params,
                headers: {
                    "Authorization": "Bearer "
                },
            }),
            providesTags: [
                "User",
                {
                    type: "User",
                    id: "LIST",
                }
            ],
        })
    })
})

export const {
    useGetUserListQuery,
} = userApi
