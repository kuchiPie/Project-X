import React from "react";
import FacultyModel from "./components/FacultyModel";
import AddFaculty from "./components/AddFaculty";
import WentWrongWidget from "../../widgets/WentWrongWidget";
import { logoutHandler } from "../../reduxSlices/LoginSlice";
import { continueOnErrorhandler } from "../../reduxSlices/FacultySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Facultys = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {hasFailed} = useSelector(state=>state.faculty);
  const continueOnError=()=>{
    dispatch(continueOnErrorhandler());
  }

  const logoutFunction=()=>{
    console.log('exe');
    dispatch(logoutHandler());
    navigate('/');
  }
  return (
    <>
      <WentWrongWidget noFunction={continueOnError} yesFunction={logoutFunction} hasFailed={hasFailed}/>
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
