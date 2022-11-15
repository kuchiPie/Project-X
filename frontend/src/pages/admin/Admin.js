import { useState } from "react";

import Navbar from "../../widgets/NavBar";
import Navbar2 from "../../widgets/Navbar2";
import CustomSidebar from "../../widgets/CustomSidebar";
import Student from "../student/Student";
import { Outlet } from "react-router-dom";


const Admin = () => {
  
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="flex">
        <CustomSidebar/>
 
      </div>
    </>
  );
};

export default Admin;
