import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { getFacultyServer } from "../../../reduxSlices/FacultySlice";
import DeleteFaculty from "./DeleteFaculty";
import EditFaculty from "./EditFaculty";
import Mentees from "./Mentees";

const FacultyModel = () => {
    // var token = localStorage.getItem('token');
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const {facultyList} = useSelector(state => state.faculty) 

    // useEffect(()=>{
    //   dispatch(getFacultyServer({token:token}))
    // },[])
    // console.log(facultyList)
    // if(facultyList.length === 0){
    //     dispatch(getFacultyServer({token:token}))
    // }

    const actionBodyTemplate = (rowData) => {
        return (
          <>
            <Mentees rowData={rowData}/>
            <EditFaculty rowData={rowData}/>
            <DeleteFaculty rowData={rowData}/>
          </>
        );
      };



      const paginatorLeft = (
        <Button type="button" icon="pi pi-refresh" className="p-button-text" />
      );
      const paginatorRight = (
        <Button type="button" icon="pi pi-cloud" className="p-button-text" />
      );

  return (
    <>
    {facultyList !== [] ?
    <DataTable
              value={facultyList}
              paginator
              responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
              rows={10}
              rowsPerPageOptions={[10, 20, 50]}
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
              selection={selectedFaculty}
              onSelectionChange={(e) => setSelectedFaculty(e.value)}
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem" }}
                exportable={false}
              ></Column>
              <Column
                field="name"
                header="Name"
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="email"
                header="Institute ID"
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="department"
                header="Department"
                style={{ minidth: "8rem" }}
              ></Column>
              {/* <Column
                field="mentees"
                header="No. of Mentees"
                style={{ width: "20%" }}
              ></Column> */}
              <Column
                header="Actions"
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "8rem" }}
              ></Column>
            </DataTable> : <div>Fetching Data</div>}
            
    </>
  )
}

export default FacultyModel