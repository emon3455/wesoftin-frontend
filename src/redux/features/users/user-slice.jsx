import { createSlice } from "@reduxjs/toolkit";

export const singleUserSlice = createSlice({
    name: "singleUserSlice",
    initialState: { user: {} },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUserData } = singleUserSlice.actions;

export default singleUserSlice.reducer;

