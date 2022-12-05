import React,{useState} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';

const AllOutpassRequests = () => {

    const emptyOutpass = {
        name:"",
        institute_id:"",
        date_of_leaving:"",
        date_of_arriving:"",
        reason:"",
        status:"",
    }

    const [outpass,setOutpass] = useState(emptyOutpass);
    const [showOutpassDialog,setShowOutpassDialog] = useState(false);
   const [selectedOutpass,setSelectedOutpass] =useState(null);
   const [submitted,setSubmitted] = useState(false)
   const statuses = [
    'Pending', 'Approved', 'Rejected'
];
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  const Requests = [
    {
      name: "Aman Gupta",
      institute_id: "20bds024@iiitdwd.ac.in",
      date_of_leaving: "20/12/22",
      date_of_arriving: "08/01/23",
      reason: "Vacation",
      status: "Pending",
    },
    {
      name: "Manan Sharma",
      institute_id: "20bds025@iiitdwd.ac.in",
      date_of_leaving: "20/12/22",
      date_of_arriving: "08/01/23",
      reason: "Vacation",
      status: "Approved",
    },
  ];
  const showOutpass = (rowData)=>{
    setOutpass(rowData)
    setShowOutpassDialog(true)

  }
  
  const showOutpassDialogFooter =(
    <>
            <Button icon="pi pi-check" label="Confirm" className="mr-2"></Button>
            <Button icon="pi pi-times" label="Reject" className="p-button-danger p-button-outlined"></Button>
        </>
  );

  const statusbodytemplate = (rowData)=>{
    return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
  }

  return (
    <>
      <div className="px-5">
        <h1>All Outpass Requests</h1>
        <DataTable
          value={Requests}
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
          onSelectionChange={(e)=>showOutpass(e.value)}
        >
          <Column field="name" header="Name" />
          <Column field="institute_id" header="Institute Id" />
          <Column field="date_of_leaving" header="Date of Leaving" />
          <Column field="reason" header="Reason" />
          <Column field="date_of_arriving" header="Date of Arriving" />
          <Column field="status" header="Status" body={statusbodytemplate} />
        </DataTable>


        <Dialog visible={showOutpassDialog} header="Outpass" footer={showOutpassDialogFooter} onHide={()=>setShowOutpassDialog(false)}>
        <Card title="Outpass Info">
          
        </Card>

        </Dialog>
      </div>
    </>
  );
};

export default AllOutpassRequests;
