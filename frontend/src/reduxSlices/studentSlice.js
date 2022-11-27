import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading:false,
    students:[]
}

const studentSlice = createSlice({
    name: 'Student',
    initialState,
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(getAllStudents.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(getAllStudents.fulfilled, (state,action) => {
                state.isLoading=false;
                state.students=[];
                // console.log(action.payload.data)
                action.payload.data.forEach(element => {
                    state.students.push(element)
                });
            })
    }
})

export const getAllStudents = createAsyncThunk('student/getStudentList', async (queryParameters) => {
    const {keyword,batch, branch, limit, skip} = queryParameters;
    const response = await axios.get(`http://localhost:5000/api/student?keyword=${keyword}&batch=${batch}&branch=${branch}&limit=${limit}&skip=${skip}`);
    // console.log(response.data)
    return response.data
})

export default studentSlice.reducer 