import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Outpass from "./components/Outpass";
import { useSelector, useDispatch } from "react-redux";
import { getPendingOutpasses } from "../../reduxSlices/FacultySlice";
import { useEffect } from "react";

const AllOutpassRequests = () => {
  var dispatch = useDispatch()
  var { pendingOutpassses } = useSelector(state => state.faculty)
  const {loggedUser} = useSelector(state=>state.login);

  useEffect(() => {
    dispatch(getPendingOutpasses(loggedUser._id))
  }, [])
  

  const localPendingOutpasses = []
  pendingOutpassses.forEach((outpass)=>{
    localPendingOutpasses.push({
      dateofjourney:outpass.dateofjourney.substring(0,10),
      dateofreturn:outpass.dateofreturn.substring(0,10),
      reason:outpass.reason,
      hostelRoom:outpass.hostelRoom,
      contactNo:outpass.contactNo,
      leaveTime:outpass.leaveTime,
      returnTime:outpass.returnTime,
      remarks: outpass.remarks === undefined ? "" : outpass.remarks,
      _id: outpass._id
      })
  })


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

  const [outpass, setOutpass] = useState(emptyOutpass);
  const [showOutpassDialog, setShowOutpassDialog] = useState(false);

  
 
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  
  const showOutpass = (rowData) => {
    setOutpass(rowData);
    setShowOutpassDialog(true);
  };
  

  return (
    <>
      <div className="px-5">
        <h1>All Outpass Requests</h1>
        <DataTable
          value={localPendingOutpasses}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          showGridlines
          selectionMode="single"
          onSelectionChange={(e) => showOutpass(e.value)}
        >
          <Column field="name" header="Name" />
          <Column field="institute_id" header="Institute Id" />
          <Column field="dateofjourney" header="Date of Leaving" />
          <Column field="reason" header="Reason" />
          <Column field="dateofreturn" header="Date of Arriving" />
        </DataTable>
        <Outpass outpass={outpass} showOutpassDialog={showOutpassDialog} setShowOutpassDialog={setShowOutpassDialog} controls={true}/>
        
      </div>
    </>
  );
};

export default AllOutpassRequests;
