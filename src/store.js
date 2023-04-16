import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./fetuares/testSlice/test";

export const store = configureStore({
    reducer:  restaurantReducer,

})