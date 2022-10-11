import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload //user wil be updated based on the payloaded
        },
        logout: (state) => {
            state.user = null
        },
    },
});

export const{login,logout} = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer