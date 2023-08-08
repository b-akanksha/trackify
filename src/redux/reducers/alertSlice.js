import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
    name: 'alert',
    initialState: { open: false, message: null },
    reducers: {
        setAlert(state, action) {
            state.open = true;
            state.message = action.payload
        },
        resetAlert(state) {
            state = { open: false, message: null };
            return state;
        }
    }
})

export const { setAlert, resetAlert } = alertSlice.actions
export default alertSlice.reducer