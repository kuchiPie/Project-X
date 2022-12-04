import { React, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { addFacultyServer } from "../../../reduxSlices/FacultySlice";

const AddFaculty = () => {
  var {token}=useSelector(state=>state.login);

  const [addFacultyDialog, setAddFacultyDialog] = useState(false);
  const [facultyName, setFacultyName] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [selectedDepartment,setSelectedDepartment] = useState(null)

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

  const dispatch = useDispatch()



  const addFaculty = () => {
    setAddFacultyDialog(true);
  };


  const hideAddFacultyDialog = () => {
    setAddFacultyDialog(false);
  };


  const onAddFaculty = async() => {
    console.log(token);
    dispatch(addFacultyServer({faculty:{name: facultyName, email: facultyId, department: selectedDepartment.label},token:token}));
    setAddFacultyDialog(false);
    setFacultyName("")
    setFacultyId("")
    setSelectedDepartment("")
  }
  const onDepartmentChange = (e)=>{
    setSelectedDepartment(e.target.value)
  }


  const addFacultyDialogFooter = (
    <>
      <Button label="Add Faculty" className="p-button-text" onClick={onAddFaculty}/>
    </>
  );
  return (
    <>
      <Button
        label="Add Faculty"
        className="mt-3"
        onClick={(e) => addFaculty()}
      />

<Dialog
        visible={addFacultyDialog}
        style={{ width: "450px" }}
        header="Add Faculty"
        footer={addFacultyDialogFooter}
        onHide={hideAddFacultyDialog}
      >
        <div className="card">
          <div className="flex flex-column">
            <label htmlFor="facultyName" className="mb-2">Name</label>
            <InputText
              id="facultyName"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
            />
          </div>
          <div className="flex flex-column mt-4">
            <label htmlFor="facultyId" className="mb-2">Institute Id(Mail)</label>
            <InputText
              id="facultyId"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
            />
          </div>
          <div className="flex flex-column mt-4">
            <label htmlFor="facultyDept" className="mb-2">Department</label>
            <Dropdown value={selectedDepartment} options={departments} placeholder="Select a department" required onChange={onDepartmentChange}/>
          </div>
        </div>
      </Dialog>

    </>
  );
};

export default AddFaculty;
