import React,{useState} from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const ViewOutpassHistory = () => {
  const [outpassHistoryDialog,setOutpassHistoryDialog] = useState(false);




  const OutpassHistory = [
    {
      date_of_leaving:'20/12/22',
      date_of_arriving:'24/12/22',
      reason:'Vacation',
      status:'Pending',
    },
    {
      date_of_leaving:'24/12/22',
      date_of_arriving:'25/12/22',
      reason:'Vacation',
      status:'Approved',
    },
    {
      date_of_leaving:'25/12/22',
      date_of_arriving:'26/12/22',
      reason:'Vacation',
      status:'Rejected',
    }
  ]



  return (
    <>
      <Button label="View Outpass History" className="mx-2" onClick={()=>setOutpassHistoryDialog(true)}/>
      <Dialog visible={outpassHistoryDialog} onHide={()=>setOutpassHistoryDialog(false)}>
        <DataTable value={OutpassHistory}>
          <Column field="date_of_leaving" header="Date of Leaving"></Column>
          <Column field="date_of_arriving" header="Date of Arriving"></Column>
          <Column field="reason" header="Reason"></Column>
          <Column field="status" header="Status"></Column>
        </DataTable>
      </Dialog>
    </>
  )
}

export default ViewOutpassHistory