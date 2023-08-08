import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setAuth(state, action) {
      state.token = action.payload
    },
    resetAuth(state) {
        state = { token: null };
        return state;
    }
  }
})

export const { setAuth, resetAuth } = authSlice.actions

export default authSlice.reducer