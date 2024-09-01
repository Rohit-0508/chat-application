import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeComponent: 'global',
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setActiveComponent: (state, action) => {
            state.activeComponent = action.payload;
        },
    }
})
export const {setActiveComponent}= sidebarSlice.actions;

export default sidebarSlice.reducer;