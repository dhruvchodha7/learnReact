import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisibile: false},
    reducers: {
        toggle(state){
            state.cartIsVisibile = !state.cartIsVisibile
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;