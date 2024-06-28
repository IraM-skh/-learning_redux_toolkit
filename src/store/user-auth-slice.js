import { createSlice } from "@reduxjs/toolkit";
const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: { isUserLoggedIn: false },
    reducers: {
        logIn(state) {
            state.isUserLoggedIn = true;
        },
        signOut(state) {
            state.isUserLoggedIn = false;
        },
    },
});
export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice.reducer;
