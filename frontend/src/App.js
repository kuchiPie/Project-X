import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Admin from './pages/admin/Admin'
import Faculty from './pages/faculty/Faculty';
import Student from './pages/student/Student'
import Outpass from './pages/student/studentOutpass/Outpass'
import Profile from './pages/student/studentProfile/Profile'
import Login from './pages/Login'
import Sessions from './pages/admin/Sessions'
import { useDispatch } from 'react-redux'
import { setLoginStatus } from './reduxSlices/LoginSlice'

import Students from './pages/admin/Students'
import Facultys from './pages/admin/Facultys';
import AllMentees from './pages/faculty/AllMentees';
import AllOutpassRequests from './pages/faculty/AllOutpassRequests';

function App(){
    const logindetails = JSON.parse(localStorage.getItem('isLoggedIn'));
    const dispatch = useDispatch()
    if(logindetails){
        const token = JSON.parse(localStorage.getItem('token'));
        const user = JSON.parse(localStorage.getItem('user'));
        const userType = JSON.parse(localStorage.getItem('userType'));
        if(token && user && userType){
            dispatch(setLoginStatus({isLogged: logindetails, isUser: user, isToken: token, isUserType: userType}))
        }
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/admin/:id' element={<Admin/>}>
                    <Route path="manage_sessions" element={<Sessions/>}></Route>
                    <Route path='manage_faculty' element={<Facultys/>}/>
                    <Route path='manage_students' element={<Students/>}/>
                </Route>
                <Route path='/faculty' element={<Faculty/>}>
                    <Route path="all_mentees" element={<AllMentees/>}></Route>
                    <Route path="all_outpass_requests" element={<AllOutpassRequests/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
                <Route path='/student' element={<Student/>}>
                    <Route path="profile" element={<Profile/>}></Route>
                    <Route path='outpass' element={<Outpass/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;