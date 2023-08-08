import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoader } from './loaderSlice';
import { getRequest } from '../../utils/axios';
import { setAlert } from './alertSlice';

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {tracks: []},
  reducers: {
    setTracks(state, action) {
      state.tracks = action.payload
    },
    resetTracks(state) {
        state = { tracks: [] };
        return state;
    }
  }
})

export const { setTracks, resetTracks } = trackSlice.actions

export const fetchTopTracks = createAsyncThunk('fetchTracks', async (_, {dispatch}) => {
    try {
        dispatch(setLoader(true));
        const response = await getRequest('me/top/tracks?time_range=short_term&limit=10');
        dispatch(setTracks(response.data));
        dispatch(setLoader(false));
    } catch(err) {
        dispatch(setLoader(false));
        dispatch(setAlert('Failed to fetch top tracks'));
    }
}) 

export default trackSlice.reducer