import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loaderSlice'
import authReducer from './reducers/authSlice'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer
  }
})