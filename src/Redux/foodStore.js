import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"
import foodReducer from "./foodSlice"
const foodStore = configureStore({
    reducer: {
        // Store Reducer which contains all reducer slice Define your reducers here
        cart: cartReducer,
        food: foodReducer
    },
});

export default foodStore;