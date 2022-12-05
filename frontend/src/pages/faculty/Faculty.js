import React from 'react'
import Navbar from '../../widgets/NavBar'
import FacultyNavBar from './widgets/FacultyNavBar'
import { Outlet } from 'react-router-dom'


const Faculty = () => {
  return (
    <>
    <div className="overflow-x-hidden">
        <Navbar />
        <FacultyNavBar/>
        <Outlet/>

      </div>
    </>
  )
}

export default Faculty