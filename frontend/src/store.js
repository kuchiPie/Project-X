import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reduxSlices/LoginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer
  }
})

