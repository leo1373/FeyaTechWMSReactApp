import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "@/lib/api/api.constants";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL}),
    endpoints: () => ({}),
    tagTypes: ["User"],
})
