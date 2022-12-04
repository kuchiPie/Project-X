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
            .addCase(mapSelectedStudents.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(mapSelectedStudents.fulfilled, (state,action) => {
                state.isLoading=false;
                // state.students=[];
                // // console.log(action.payload.data)
                // action.payload.data.forEach(element => {
                //     state.students.push(element)
                // });
            })
    }
})

export const getAllStudents = createAsyncThunk('student/getStudentList', async (queryParameters) => {
    const {keyword,batch, branch, limit, skip} = queryParameters;
    // console.log()
    const response = await axios.get(`http://localhost:5000/api/student?keyword=${keyword}&batch=${batch}&branch=${branch}&limit=${limit}&skip=${skip}`);
    // console.log(response.data)
    return response.data
})

export const mapSelectedStudents = createAsyncThunk('StudentFacultyMapping/map', async (data) => {
    console.log(data)
    const response = await axios.post('http://localhost:5000/api/mapStudentFaculty',{
        studentArray : data.selStudents,
        facultyId : data.facultyId
    })

    console.log(response)
    // return response.data
})

export default studentSlice.reducer 