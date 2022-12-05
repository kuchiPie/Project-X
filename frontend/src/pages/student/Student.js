import { useState } from "react";

import Navbar from "../../widgets/NavBar";
import StudentSidebar from "../../widgets/StudentSidebar";
import { Outlet } from "react-router-dom";
import { Button } from "primereact/button";

const Student = () => {
  const [visibleLeft, setVisibleLeft] = useState(true);
  return (
    <>
      <div >
        <Navbar />
        <div className="flex flex-column">
        <div className="flex flex-row">
        {visibleLeft ? (
            <Button
              icon="pi pi-angle-double-left"
              style={{
                width:"4rem",
                backgroundColor: "white",
                border: "0px",
                color: "black",
                margin: "12px",
                height: "2rem",
                
              }}
              onClick={() => setVisibleLeft(false)}
            />
          ) : (
            <Button
              icon="pi pi-angle-double-right"
              style={{
                width:"4rem",
                backgroundColor: "white",
                border: "0px",
                color: "black",
                margin: "12px",
                height: "2rem",
              }}
              onClick={() => setVisibleLeft(true)}
            />
          )}
        <h3>STUDENT PORTAL</h3>
        </div>
          
          
          
          <div className="flex">
            <StudentSidebar visibleLeft={visibleLeft} />
            <Outlet />
          </div>

            
        </div>
      </div>
    </>
  );
};

export default Student;
