import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ViewMenteeProfile from "./components/ViewMenteeProfile";
import ViewOutpassHistory from "./components/ViewOutpassHistory";

const AllMentees = () => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  const mentees = [
    {
      name: "Aman Gupta",
      institute_id: "20bds024@iiitdwd.ac.in",
      phone_no: "9036986178",
      hometown: "Mumbai",
    },
  ];

  const actionBodyTemplate = (rowData)=> {
    return (
        <>
          <ViewMenteeProfile rowData={rowData}/>
          <ViewOutpassHistory/>
        </>
      );
  }

  return (
    <>
      <div className="px-5">
        <h1>All Mentees</h1>
        <DataTable
          value={mentees}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column field="name" header="Name" style={{ minWidth: "8rem" }} />
          <Column
            field="institute_id"
            header="Institute Id"
            style={{ minWidth: "8rem" }}
          />
          <Column
            field="phone_no"
            header="Phone No."
            style={{ minWidth: "8rem" }}
          />
          <Column
            field="hometown"
            header="Hometown"
            style={{ minWidth: "8rem" }}
          />
          <Column
            body={actionBodyTemplate}
            export={false}
            header="Actions"
            style={{ minWidth: "4rem" }}
          />
        </DataTable>
      </div>
    </>
  );
};

export default AllMentees;
