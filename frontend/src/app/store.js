import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../context/sidebarSlice";
import authSlice from "../context/authSlice"

const store=configureStore({
    reducer:{
        sidebar:sidebarSlice,
        auth:authSlice,
    },
});

export default store;