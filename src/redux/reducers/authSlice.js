import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoader } from './loaderSlice'
import { getRequest } from '../../utils/axios'
import { setAlert } from './alertSlice'

const authSlice = createSlice({
  name: 'auth',
  initialState: {token: null, user: {}},
  reducers: {
    setAuth(state, action) {
      state.token = action.payload
    },
    setUser(state, action) {
        state.user = action.payload;
    },
    resetAuth(state) {
        state = { token: null, user: {} };
        return state;
    }
  }
})

export const { setAuth, setUser, resetAuth } = authSlice.actions

export const fetchUserDetails = createAsyncThunk('fetchDetails', async (_, {dispatch}) => {
    try {
        dispatch(setLoader(true));
        const response = await getRequest('me', null);
        dispatch(setUser(response.data));
        dispatch(setLoader(false));
    } catch(err) {
        dispatch(setLoader(false));
        dispatch(setAlert('Failed to fetch user details'));
    }
}) 

export default authSlice.reducer