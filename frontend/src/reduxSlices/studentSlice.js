import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

const studentSlice = createSlice({
    name: 'Student',
    initialState,
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(addFacultyServer.pending, (state, action) => {
                
            })
            .addCase(addFacultyServer.fulfilled, (state, action) => {
                state.push({...action.payload})
            })
            .addCase(addFacultyServer.rejected, (state, action) => {

            })
            .addCase(getFacultyServer.fulfilled, (state,action) => {
                action.payload.forEach(element => {
                    state.push(element)
                });
            })
            .addCase(editFacultyServer.fulfilled, (state, action) => {
                const index = state.findIndex((element) => action.meta.arg._id === element._id)
                state[index] = action.meta.arg
            })
            .addCase(editFacultyServer.rejected, (state, action) => {
                console.log(action.error)
            })
            .addCase(deleteFacultyServer.fulfilled, (state, action) => {
                const index = state.findIndex((element) => action.payload._id === element._id)
                state.splice(index, 1)
            })
    }
})

export const getAllStudents = createAsyncThunk('student/getStudentList', async () => {
    const response = await axios.get('http://localhost:5000/api/student')
    return response.data
})

export default facultySlice.reducer 