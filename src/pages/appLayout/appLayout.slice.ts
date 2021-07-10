import { createSlice } from "@reduxjs/toolkit";


const appLayoutSlice = createSlice({
    name: 'appLayout',
    initialState: {
        dummyState: "dummy-state"
    },
    reducers: {
        dummyAction: (state, action) => { }
    }
});


export const {
    dummyAction
} = appLayoutSlice.actions;


export default appLayoutSlice.reducer;