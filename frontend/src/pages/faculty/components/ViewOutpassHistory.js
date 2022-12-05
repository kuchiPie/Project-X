import React,{useState} from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import Outpass from './Outpass'
import { getHistoricOutpasses } from '../../../reduxSlices/FacultySlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ViewOutpassHistory = ({rowData}) => {

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

  const [outpassHistoryDialog,setOutpassHistoryDialog] = useState(false);
  const [outpass,setOutpass] = useState(emptyOutpass)
  const [showOutpassDialog,setShowOutpassDialog] = useState(false)

  const [OutpassHistory, setOutpassHistory] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHistoricOutpasses(rowData._id))
  }, [])
  

  // const OutpassHistory = [
  //   {
  //     name: "Aman Gupta",
  //     institute_id: "20bds024@iiitdwd.ac.in",
  //     gender: "Male",
  //     branch: "DSAI",
  //     semester: "5th",
  //     hostel_room: "223",
  //     contact_no: "9036986178",
  //     date_of_leaving: "20/12/22",
  //     date_of_arriving: "22/12/22",
  //     time_of_leaving: "9:00AM",
  //     time_of_arrival: "9:00PM",
  //     reason: "Vacation",
  //     status: "Pending",
  //     uploaded_document: "",
  //   },
  // ]

  const showOutpass = (rowData) => {
    setOutpass(rowData);
    setShowOutpassDialog(true);
  };
  
  return (
    <>
      <Button label="View Outpass History" className="mx-2" onClick={()=>setOutpassHistoryDialog(true)}/>
      <Dialog visible={outpassHistoryDialog} onHide={()=>setOutpassHistoryDialog(false)} >
        <DataTable value={OutpassHistory} selectionMode="single" onSelectionChange={(e)=>showOutpass(e.value)}>
          <Column field="date_of_leaving" header="Date of Leaving"></Column>
          <Column field="date_of_arriving" header="Date of Arriving"></Column>
          <Column field="reason" header="Reason"></Column>
          <Column field="status" header="Status"></Column>
        </DataTable>
      </Dialog>
      <Outpass outpass={outpass} showOutpassDialog={showOutpassDialog} setShowOutpassDialog={setShowOutpassDialog} />
    </>
  )
}

export default ViewOutpassHistory