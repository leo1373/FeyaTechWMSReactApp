import {configureStore} from "@reduxjs/toolkit";
import {userApi} from "@/lib/api/user/userApi";
import {baseApi} from "@/lib/api/baseApi";

const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
}

export const makeStore = () => {

    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                baseApi.middleware,
                userApi.middleware,
            ]),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
