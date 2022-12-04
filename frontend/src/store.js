import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reduxSlices/LoginSlice'
import facultyReducer from './reduxSlices/FacultySlice'
import studentReducer from './reduxSlices/studentSlice'

export const store = configureStore({
  reducer: {
        login: loginReducer,
        faculty: facultyReducer,
        student:studentReducer,
    }
})

