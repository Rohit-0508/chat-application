import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../context/sidebarSlice";

const store=configureStore({
    reducer:{
        sidebar:sidebarSlice,
    },
});

export default store;