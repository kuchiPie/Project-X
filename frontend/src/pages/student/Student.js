import { useState } from "react";

import Navbar from "../../widgets/NavBar";
import Navbar2 from "../../widgets/Navbar2";
import CustomSidebar from "../../widgets/CustomSidebar";
import { Outlet } from "react-router-dom";
import { Button } from "primereact/button";

const Student = () => {
  const [visibleLeft, setVisibleLeft] = useState(true);
  return (
    <>
      <div >
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
            <Outlet />
          </div>

            
        </div>
      </div>
    </>
  );
};

export default Student;
