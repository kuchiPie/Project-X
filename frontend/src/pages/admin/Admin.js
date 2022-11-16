import { useState } from "react";

import Navbar from "../../widgets/NavBar";
import Navbar2 from "../../widgets/Navbar2";
import CustomSidebar from "../../widgets/CustomSidebar";
import Student from "../student/Student";
import { Outlet } from "react-router-dom";
import { Button } from "primereact/button";

const Admin = () => {
  const [visibleLeft, setVisibleLeft] = useState(true);
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Navbar2 />
        <div className="flex flex-column">
          {visibleLeft ? (
            <Button
              label="Hide Menu"
              icon="pi pi-arrow-left"
              style={{
                width:"10rem",
                backgroundColor: "white",
                border: "0px",
                color: "black",
                marginTop: "15px",
                height: "1rem",
              }}
              onClick={() => setVisibleLeft(false)}
            />
          ) : (
            <Button
              label="Show Menu"
              icon="pi pi-arrow-right"
              style={{
                width:"10rem",
                backgroundColor: "white",
                border: "0px",
                color: "black",
                marginTop: "15px",
                height: "1rem",
              }}
              onClick={() => setVisibleLeft(true)}
            />
          )}
          <div className="flex">
            <CustomSidebar visibleLeft={visibleLeft} />
            <Outlet context={visibleLeft} />
          </div>

            
        </div>
      </div>
    </>
  );
};

export default Admin;
