//иморт из toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import userAuthSlice from "./user-auth-slice";

// const initialState = {
//     counter: 0,
//     isCounterShow: true,
// };

//создать кусочек

//без toolkit
{
    // const countetrReducer = (state = initialState, action) => {
    //     if (action.type === "increment") {
    //         return { counter: state.counter + 1, isCounterShow: true };
    //     }
    //     if (action.type === "decrement") {
    //         return { counter: state.counter - 1, isCounterShow: true };
    //     }
    //     if (action.type === "increase") {
    //         return { counter: state.counter + action.number, isCounterShow: true };
    //     }
    //     if (action.type === "visibility") {
    //         return { counter: state.counter, isCounterShow: !state.isCounterShow };
    //     }
    //     return state;
    // };
}
const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: userAuthSlice,
    },
});

export default store;
