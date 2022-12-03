import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";


const Mentees = () => {



  const [viewMenteesDialog, setViewMenteesDialog] = useState(false);
  

 
  const viewMentees=()=>{
    setViewMenteesDialog(true);    
  }

  const hideViewMenteesDialog = () => {
    setViewMenteesDialog(false);
  };

  

  const viewMenteesDialogFooter = (
    <>
     {/* <AddMentees /> */}
    </>
  );

  return (
    <>
      <Button
        icon="pi pi-users"
        className="p-button-rounded p-button-success mr-2"
        onClick={() => viewMentees()}
      />

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
