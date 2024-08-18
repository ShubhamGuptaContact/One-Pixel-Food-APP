import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"

const foodStore = configureStore({
    reducer: {
        // Store Reducer which contains all reducer slice Define your reducers here
        cart: cartReducer
    },
});

export default foodStore;