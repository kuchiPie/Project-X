import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import AddMenteesDialog from "./AddMenteesDialog"
import { useDispatch, useSelector } from "react-redux";
import { getMentees } from '../../../reduxSlices/studentSlice';



const Mentees = (props) => {



  const [viewMenteesDialog, setViewMenteesDialog] = useState(false);
  const [viewAddMenteesDialog, setViewAddMenteesDialog] = useState(false);
  const {mentees} = useSelector(state => state.student)
  const dispatch = useDispatch()
  
 
  const viewMentees=()=>{
    setViewMenteesDialog(true);
		dispatch(getMentees(props.rowData._id));
    console.log(props.rowData._id)
    console.log('mentees', mentees)
  }

  const hideViewMenteesDialog = () => {
    setViewMenteesDialog(false);
  };

  const hideViewAddMenteesDialog = () => {
    setViewAddMenteesDialog(false);
  }

  const showViewAddMenteesDialog = () => {
    setViewAddMenteesDialog(true);
  }

  // const 

  const localMentees=[];
  mentees.forEach(mentee=>{localMentees.push({'name':mentee.name?mentee.name:"Some Student",'institute_id':mentee.rollno,'department':mentee.branch==="bec"? "ECE": mentee.branch==="bcs"?"CSE":"DSAI"})})
  

  const viewMenteesDialogFooter = (
    <>
     <Button label="Add More Mentees" onClick={showViewAddMenteesDialog}/>
    </>
  );

  return (
    <>
      <Button
        icon="pi pi-users"
        className="p-button-rounded p-button-success mr-2"
        onClick={() => viewMentees()}
      />

      {/* <AddMenteesDialog viewAddMenteesDialog = {viewAddMenteesDialog}/> */}

      <Dialog
        visible={viewAddMenteesDialog}
        style={{ width: "1050px" }}
        header="Add Mentees"
        model
        onHide={hideViewAddMenteesDialog}
      >
        <AddMenteesDialog faculty={props.rowData._id}/>
      </Dialog>

      <Dialog
        visible={viewMenteesDialog}
        style={{ width: "650px" }}
        header="View Mentees"
        footer={viewMenteesDialogFooter}
        model
        onHide={hideViewMenteesDialog}
      >
        {/* Mentees */}
        <DataTable
        value={localMentees}
        >
          <Column selectionMode="multiple"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="institute_id" header="Institute ID"></Column>
          <Column field="department" header="Department"></Column>
        </DataTable>
      </Dialog>
      
      
    </>
  );
};

export default Mentees;
