import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    //инициализвациооное состояение
    initialState: {
        counter: 0,
        isCounterShow: true,
    },
    //действия в функции redusere
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        showOrHideCounter(state) {
            state.isCounterShow = !state.isCounterShow;
        },
    },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
