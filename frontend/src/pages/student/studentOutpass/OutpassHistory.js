import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Outpass from "../../faculty/components/Outpass";

function OutpassHistory() {
    const OutpassHistory = [
        {
          name: "Aman Gupta",
          institute_id: "20bds024@iiitdwd.ac.in",
          gender: "Male",
          branch: "DSAI",
          semester: "5th",
          hostel_room: "223",
          contact_no: "9036986178",
          date_of_leaving: "20/12/22",
          date_of_arriving: "22/12/22",
          time_of_leaving: "9:00AM",
          time_of_arrival: "9:00PM",
          reason: "I am going to attend a marriage function in my hometown",
          status: "Pending",
          uploaded_document: "",
        },
      ]
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
  const [dataviewValue, setDataviewValue] = useState(null);
 
  const [outpass, setOutpass] = useState(emptyOutpass);
  const [showOutpassDialog, setShowOutpassDialog] = useState(false);
  

  const showOutpass = (rowData) => {
    setOutpass(rowData);
    setShowOutpassDialog(true);
  };

  const dataviewListItem = (data) => {
    return (
      <div className="col-12">
        <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
          <div className="flex-1 text-center md:text-left">
            <div className="font-bold text-2xl">{data.name}</div>
            <div className="mb-3">{data.description}</div>
          </div>
          <div className="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
            <span className="text-2xl font-semibold mb-2 align-self-center md:align-self-end">
              ${data.date}
            </span>
            <Button label="View" className="mb-2"></Button>
            <span>{data.approvalStatus}</span>
          </div>
        </div>
      </div>
    );
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
          value={OutpassHistory}
          selectionMode="single"
          onSelectionChange={(e) => showOutpass(e.value)}
        >
          <Column field="date_of_leaving" header="Date of Leaving"></Column>
          <Column field="date_of_arriving" header="Date of Arriving"></Column>
          <Column field="reason" header="Reason"></Column>
          <Column field="status" header="Status"></Column>
        </DataTable>
      </Dialog>
      <Outpass outpass={outpass} showOutpassDialog={showOutpassDialog} setShowOutpassDialog={setShowOutpassDialog} controls={true} />
    </>
  );
}

export default OutpassHistory;
