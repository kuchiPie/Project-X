

import Navbar from "../../widgets/NavBar";
import { Outlet } from "react-router-dom";
import StudentSidebar from "./widgets/StudentSidebar";


const Student = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <StudentSidebar/>
        <Outlet/>
      </div>
      
    </>
  );
};

export default Student;
