import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './reducers/sampleSlice'

export const store = configureStore({
  reducer: {
    sample: sampleReducer
  }
})