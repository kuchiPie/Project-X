import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoggedIn: false,
    loggedUser: {},
    token: '',
    status: '',
    userType: '',
    error: ''
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logoutHandler(state, action) {
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('userType')
            state.isLoggedIn = false
            state.loggedUser = {}
            state.token = '';
            state.status = ''
            state.userType = ''
        },
        setLoginStatus (state, action) {
            state.isLoggedIn = action.payload.isLogged
            state.token = action.payload.isToken
            state.loggedUser = action.payload.isUser
            state.userType = action.payload.isUserType
            // if ( state.userType === 'Faculty' ){
            
            // }
            // else{
            //     state.mentees= []
            // }
            
        },
        // setUserType(state, action) {
        //     state.userType = action.payload.userType
        // }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('exe');
                state.status = 'accepted'
                state.loggedUser = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.error
            })
    }
})

export const loginUser = createAsyncThunk('login/loginUser', async (logindetails, { rejectWithValue }) => {
    let API
    // console.log(userType)
    // console.log(logindetails)
    if (logindetails.selectedUser.label === 'Admin')
        API = "http://localhost:5000/api/admin/";
    if(logindetails.selectedUser.label === 'Faculty')
        API = "http://localhost:5000/api/faculty/";   
    if(logindetails.selectedUser.label === 'Student')
        API = "http://localhost:5000/api/student/";  

    try {
        const response = await axios.post(API + "login", {email: logindetails.email, password: logindetails.password});
        console.log(response)
        return response.data
    } catch (err) {
        if (!err.response) {
            throw err
        }

        return rejectWithValue(err.response.data)
    }

})

export const { setLoginStatus, setUserType, logoutHandler } = loginSlice.actions

export default loginSlice.reducer