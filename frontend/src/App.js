import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Admin from './pages/admin/Admin'
import Student from './pages/student/Student'
import Outpass from './pages/student/Outpass'
import Profile from './pages/student/Profile'
import Faculty from './pages/faculty/Faculty'
import Login from './pages/Login'
import Sessions from './pages/admin/Sessions'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}>
                    <Route path="manage_sessions" element={<Sessions/>}></Route>
                    <Route path='manage_faculty' element={<Faculty/>}/>
                    <Route path='manage_student' element={<Student/>}/>
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