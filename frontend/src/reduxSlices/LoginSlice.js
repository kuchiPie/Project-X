import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoggedIn: false,
    loggedUser: {},
    token: '',
    status: '',
    userType: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logoutHandler(state,action){
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('userType')
            state=initialState
        },
        setLoginStatus(state, action) {
            state.isLoggedIn = action.payload.isLogged
            state.token = action.payload.isToken
            state.loggedUser = action.payload.isUser
            state.userType = action.payload.isUserType
        },
        setUserType(state, action) {
            state.userType = action.payload.userType
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'accepted'
                state.loggedUser = action.payload.user 
                state.token = action.payload.token 
                state.isLoggedIn = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
            }) 
    }
})

export const loginUser = createAsyncThunk('login/loginUser', async (logindetails) => {
    let API
    // console.log(userType)
    console.log(logindetails)
    if(logindetails.selectedUser.label === 'Admin')
        API = "http://localhost:5000/api/admin/";
    if(logindetails.selectedUser.label === 'Faculty')
        API = "http://localhost:5000/api/faculty/";   
    if(logindetails.selectedUser.label === 'Student')
        API = "http://localhost:5000/api/student/";  
    
    try{
        const response = await axios.post(API + "login", {email: logindetails.email, password: logindetails.password});
        return response.data
    }
    catch(e){
        console.log(e);
    }
})

export const { setLoginStatus, setUserType} = loginSlice.actions

export default loginSlice.reducer