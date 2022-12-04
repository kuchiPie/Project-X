import React from "react";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { useDispatch, useSelector } from "react-redux";
import { editFacultyServer } from "../../../reduxSlices/FacultySlice";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";

const EditFaculty = ({rowData}) => {

  const token = useSelector(state=>state.login);

    let emptyFaculty = {
        name: "",
        institute_id: "",
        department: "",
        mentees: [],
      };

      const departments = [
        {
          label:"CSE",
        },
        {
          label:"DSAI"
        },
        {
          label:"ECE"
        }
      ] 

    const [facultyInfoDialog,setFacultyInfoDialog] = useState(false)
    const [faculty,setFaculty] = useState(emptyFaculty)
    const [selectedDepartment,setSelectedDepartment] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()


    const editFaculty = (data)=>{
        setFacultyInfoDialog(true)
        setFaculty(data)
    }
    const hideFacultyInfoDialog=()=>{
        setFacultyInfoDialog(false)
    }
    const onUpdateFaculty = async() => {
        const updatedFaculty = {...faculty, department: selectedDepartment.label}
        await dispatch(editFacultyServer({faculty:updatedFaculty,token:token}))
        setFacultyInfoDialog(false)
      }

    const facultyInfoDialogFooter = (
        <>
          <Button label="Update" className="p-button-text" onClick={onUpdateFaculty}/>
        </>
      )

    const onDepartmentChange=(e)=>{
        setSelectedDepartment(e.target.value)
    }

      

  return (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-warning mr-2"
        onClick={() => editFaculty(rowData)}
      />
      <Dialog
        visible={facultyInfoDialog}
        onHide={hideFacultyInfoDialog}
        header = "Edit Profile"
        style={{width:"450px"}}
        modal
        className="p-fluid"
        footer={facultyInfoDialogFooter}
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <InputText 
            id="name"
            value={faculty.name}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !faculty.name})}
          />
        </div>
        <div className="field">
          <label htmlFor="institute_id">Institute Mail Id</label>
          <InputText 
            id="institute_id"
            value={faculty.email}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !faculty.institute_id})}
          />
        </div>
        <div className="field">
          <label htmlFor="department">Department</label>
          <Dropdown 
            value={selectedDepartment}
            options = {departments}
            placeholder="Select a department"
            required
            onChange={onDepartmentChange}
          />
        </div>
      </Dialog>
    </>
  );
};

export default EditFaculty;
