import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loaderSlice'
import authReducer from './reducers/authSlice'
import alertReducer from './reducers/alertSlice'
import trackReducer from './reducers/trackSlice'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    alert: alertReducer,
    tracks: trackReducer
  }
})