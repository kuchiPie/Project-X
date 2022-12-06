import React from 'react'
import Navbar from '../../widgets/NavBar'
import FacultySideBar from './widgets/FacultySideBar'
import { Outlet } from 'react-router-dom'


const Faculty = () => {
  return (
    <>
    <div className="overflow-x-hidden">
        <Navbar />
        <FacultySideBar/>
        <Outlet/>

      </div>
    </>
  )
}

export default Faculty