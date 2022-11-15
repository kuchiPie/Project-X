import { configureStore } from '@reduxjs/toolkit'
import getFacultyReducer from './reducers/facultyReducer';
import authReducer from './reducers/authReducer';
import messageReducer from './reducers/messageReducer';


export const store = configureStore({
  reducer: {
    getfaculty: getFacultyReducer,
    auth: authReducer,
    message: messageReducer,
  }
})

