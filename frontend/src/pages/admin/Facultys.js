import React, { useState, useRef, useEffect } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

import { useNavigate } from "react-router-dom";
import FacultyModel from "./components/FacultyModel";
import AddFaculty from "./components/AddFaculty";

const Facultys = () => {

  

  return (
    <>
      <div className="border-round-lg ml-2 w-full">
        <div className="p-3 min-h-screen border-round-lg">
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
