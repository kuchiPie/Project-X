import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading:false,
    students:[]
}

const StudentFacultyMappingSlice = createSlice({
    name: 'StudentFacultyMapping',
    initialState,
    reducers:{
        clearMapping(state,action){
            state.isLoading=false 
            state.students=[]
        }
    },
    extraReducers(builder) {
        builder
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

export const mapSelectedStudents = createAsyncThunk('StudentFacultyMapping/map', async (data) => {
    // const response = await axios.get(`http://localhost:5000/api/student?keyword=${keyword}&batch=${batch}&branch=${branch}&limit=${limit}&skip=${skip}`);
    // console.log(data.selStudents, 'From Slice')
    const response = await axios.post('http://localhost:5000/api/mapStudentFaculty',{
        studentArray : data.selStudents,
        facultyId : data.facultyId
    })

    console.log(response)
    // return response.data
})

export const { clearMapping } = StudentFacultyMappingSlice.actions

export default StudentFacultyMappingSlice.reducer 