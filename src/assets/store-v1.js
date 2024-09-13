import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";
// creating store using modern redux toolkit.
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        account : accountReducer,
        customer : customerReducer
    }
})

export default store
