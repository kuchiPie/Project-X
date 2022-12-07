import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Outpass from "../../faculty/components/Outpass";
import {useSelector} from 'react-redux'

function OutpassHistory() {
  // const user = useSelector(state => state.login.loggedUser)
  const alloutpasses = useSelector(state => state.outpass.outpassList)
  let filteredOutpasses = []
  if(alloutpasses !== 0){
    const OutpassesHistory = alloutpasses.filter((outpass) => outpass.isApproved || outpass.isRejected)

    filteredOutpasses = OutpassesHistory.map((outpass) => {
      let status
        if(outpass.isApproved){
          status = 'Approved'
        } else {
          status = 'Rejected'
        }
      return {...outpass, dateofjourney: outpass.dateofjourney.slice(0,10), dateofreturn: outpass.dateofreturn.slice(0,10), status}     
    });
  }

  const emptyOutpass = {
    name: "",
    institute_id: "",
    gender: "",
    branch: "",
    hostel_room: "",
    contact_no: "",
    date_of_leaving: "",
    date_of_arriving: "",
    time_of_leaving: "",
    time_of_arrival: "",
    reason: "",
    status: "",
    uploaded_document: "",
  };

  const [displayHistory, setDisplayHistory] = useState(false);
  // const [dataviewValue, setDataviewValue] = useState(null);
 
  const [outpass, setOutpass] = useState(emptyOutpass);
  const [showOutpassDialog, setShowOutpassDialog] = useState(false);
  

  const showOutpass = (rowData) => {
    setOutpass(rowData);
    setShowOutpassDialog(true);
  };

  return (
    <>
      <Button
        type="button"
        label="Outpass History"
        icon="pi pi-folder-open"
        onClick={() => setDisplayHistory(true)}
      />
      <Dialog
        header="History"
        visible={displayHistory}
        style={{ width: "80vw" }}
        modal
        onHide={() => setDisplayHistory(false)}
      >
        <DataTable
          value={filteredOutpasses}
          selectionMode="single"
          onSelectionChange={(e) => showOutpass(e.value)}
        >
          <Column field="dateofjourney" header="Date of Leaving"></Column>
          <Column field="dateofreturn" header="Date of Arriving"></Column>
          <Column field="reason" header="Reason"></Column>
          <Column field="status" header="Status"></Column>
        </DataTable>
      </Dialog>
      <Outpass outpass={outpass} showOutpassDialog={showOutpassDialog} setShowOutpassDialog={setShowOutpassDialog} controls={false} />
    </>
  );
}

export default OutpassHistory;
