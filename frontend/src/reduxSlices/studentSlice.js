import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading:false,
    students:[],
    mentees:[],
    student:{},
    error:''
}

const studentSlice = createSlice({
    name: 'Student',
    initialState,
    reducers:{
        clearStudent(state,action){
            state.isLoading=false 
            state.students=[]
            state.mentees=[]
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllStudents.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(getAllStudents.fulfilled, (state,action) => {
                state.isLoading=false;
                state.students=[];
                action.payload.data.forEach(element => {
                    state.students.push(element)
                });
            })
            .addCase(mapSelectedStudents.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(mapSelectedStudents.fulfilled, (state,action) => {
                state.isLoading=false;
            })
            .addCase(getMentees.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(getMentees.fulfilled, (state,action) => {
                state.mentees = []
                state.isLoading=false;
                action.payload.forEach(element => {
                    console.log(element)
                    state.mentees.push(element)
                });
            })
            .addCase(getStudentByID.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(getStudentByID.fulfilled, (state, action) => {
                state.isLoading=false;
                state.student = action.payload.data
            })
            .addCase(getStudentByID.rejected, (state, action) => {
                state.error=action.payload;
            })
            .addCase(editStudentDetails.pending, (state, action) => {
                state.isLoading=true;
            })
            .addCase(editStudentDetails.fulfilled, (state, action) => {
                state.isLoading=false;
            })
            .addCase(editStudentDetails.rejected, (state, action) => {
                state.error=action.payload;
            })
    }
})

export const getAllStudents = createAsyncThunk('student/getStudentList', async (queryParameters) => {
    const {keyword, batch, branch, limit, skip} = queryParameters;
    // console.log()
    const response = await axios.get(`http://localhost:5000/api/student?keyword=${keyword}&batch=${batch}&branch=${branch}&limit=${limit}&skip=${skip}`);
    // console.log(response.data)
    return response.data
})

export const getStudentByID = createAsyncThunk('student/getStudentByID', async (queryParameters) => {
    // console.log()
    const response = await axios.get(`http://localhost:5000/api/student/${queryParameters}`);
    // console.log(response.data)
    return response.data
})

export const editStudentDetails = createAsyncThunk('student/editStudent', async (queryParameters) => {
    const { id, body } = queryParameters;
    // console.log()
    const response = await axios.patch(`http://localhost:5000/api/student/${id}`, body);
    // console.log(response.data)
    return response.data
})

export const getMentees = createAsyncThunk('student/getMenteeList', async (queryParameters) => {
    const facultyId = queryParameters;

    var data = 
    {
        id: queryParameters
    }
    
    console.log('facultyId', data)
        // const response = await axios.get(`http://localhost:5000/api/student?keyword=${keyword}&batch=${batch}&branch=${branch}&limit=${limit}&skip=${skip}`);
    const response = await axios.get(`http://localhost:5000/api/getAllMentees?id=${queryParameters}`)
    console.log(response.data, 'from Slice')
    return response.data
    // const response = await axios.get(`http://localhost:5000/api/getAllMentees?id=${queryParameters}`);
    // console.log(response.data, 'from Slice')
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

export const { clearStudent } = studentSlice.actions

export default studentSlice.reducer 