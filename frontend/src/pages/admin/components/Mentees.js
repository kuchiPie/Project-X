import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import AddMenteesDialog from "./AddMenteesDialog"


const Mentees = (props) => {



  const [viewMenteesDialog, setViewMenteesDialog] = useState(false);
  const [viewAddMenteesDialog, setViewAddMenteesDialog] = useState(false);

 
  const viewMentees=()=>{
    setViewMenteesDialog(true);    
    console.log(props.rowData._id)
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
        style={{ width: "450px" }}
        header="View Mentees"
        footer={viewMenteesDialogFooter}
        model
        onHide={hideViewMenteesDialog}
      >
        {/* Mentees */}
        <DataTable
        // value={getMenteesData}
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
