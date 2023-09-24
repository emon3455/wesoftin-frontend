import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {userSlice} from "../features/users/user-api-slice"
import singleUserReducer from "../features/users/user-slice"

export const store = configureStore({
    reducer: {
        singleUser: singleUserReducer,
        [userSlice.reducerPath]: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
})

setupListeners(store.dispatch)