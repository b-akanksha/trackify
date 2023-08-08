import { createSlice } from '@reduxjs/toolkit'

const sampleSlice = createSlice({
  name: 'sample',
  initialState: [],
  reducers: {
    addSample(state, action) {
      state.push({
        text: action.payload
      })
    }
  }
})

export const { addSample } = sampleSlice.actions
export default sampleSlice.reducer