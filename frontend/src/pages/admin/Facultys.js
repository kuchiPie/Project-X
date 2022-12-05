import React from "react";


import FacultyModel from "./components/FacultyModel";
import AddFaculty from "./components/AddFaculty";

const Facultys = () => {

  

  return (
    <>
      <div className="border-round-lg ml-2 w-full">
        <div className="p-3 border-round-lg">
          <div>
            <h1>View Faculty</h1>
            <FacultyModel/>
          </div>
          <AddFaculty/>
        </div>
      </div>

      
      

    </>
  );
};

export default Facultys;
