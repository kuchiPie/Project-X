import { useState } from "react";

import Navbar from "../../widgets/NavBar";
import Navbar2 from "../../widgets/Navbar2";
import CustomSidebar from "../../widgets/CustomSidebar";
import Student from "../student/Student";
import { Outlet } from "react-router-dom";




const Admin = () => {
  


  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Navbar2 />  
        <Outlet/>

      </div>
    </>
  );
};

export default Admin;
