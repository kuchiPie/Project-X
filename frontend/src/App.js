import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Admin from './pages/admin/Admin'
import Student from './pages/student/Student'
import Faculty from './pages/faculty/Faculty'
import Login from './pages/login/Login'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/faculty' element={<Faculty/>}/>
                <Route path='/student' element={<Student/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;