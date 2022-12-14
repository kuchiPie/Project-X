import {React, useState} from 'react'
import { Dialog } from "primereact/dialog";
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from 'react-redux';
import { approveOutpass } from '../../../reduxSlices/FacultySlice';

const Outpass = ({outpass,showOutpassDialog,setShowOutpassDialog, controls}) => {
    console.log(outpass.remarks)
    
    const [remarkDialog,setRemarkDialog] = useState(false)
    const [remarks,setRemarks] = useState()
    const [intent, setIntent] = useState()
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.loggedUser)

    let rejectreason = '', acceptreason = ''
    const remarksFooter = (
      <>
        <Button label='Submit' onClick={()=>onSubmit()}/>
      </>
    )

      const onConfirmStatus = () => {
        setRemarks(outpass.remarks)
        setRemarkDialog(true)
        setIntent(true)
        setShowOutpassDialog(false);
      };

      const onRejectStatus = () => {
        setRemarks(outpass.remarks)
        setRemarkDialog(true)
        setIntent(false)
        setShowOutpassDialog(false);
      };

      const onSubmit = ()=>{
        setRemarkDialog(false);
        if(intent){
          acceptreason = remarks
        } else {
          rejectreason = remarks
        }
        const id = outpass._id
        dispatch(approveOutpass({acceptreason, rejectreason, intent, outpassId: id, facultyId: user._id}))
      }

  const color = outpass.status === 'Rejected' ?  'bg-red-600' : 'bg-green-300' 
  const color2 = outpass.status === undefined ? '' : color

  return (
    <>
        <Dialog
          position="top"
          visible={showOutpassDialog}
          header="Outpass Info"
          onHide={() => setShowOutpassDialog(false)}
          style={{ width: "75rem" }}
          blockScroll={true}

        >
          <Card className="shadow-3 px-7">
            <div className='flex w-2 justify-content-center align-items-center' style={{position:'relative',left:'55rem'}}>
            <div className={`border-round-2xl rounded ${color2}`} style={{width:'1rem',height:'1rem'}} ></div>
            <p className='ml-2 text-xl'>{outpass.status}</p>
            </div>
            <div className="flex justify-content-between ">
              <h1>{outpass.name}</h1>
              <h1>{outpass.institute_id}</h1>
              {/* <div className="flex justify-content-evenly">
              <h2>Name:</h2>
              <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">{outpass.name}</p>
            </div>
            <div className="flex justify-content-evenly">
              <h2>Institute Id:</h2>
              <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">{outpass.institute_id}</p>
            </div> */}
            </div>
            <Divider />
            <div className=""></div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Hostel Room No<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.hostelRoom}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Contact No <span className="px-4"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3">
                  {outpass.contactNo}
                </p>
              </div>
            </div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Date of Leaving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.dateofjourney}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Time of Leaving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.leaveTime}
                </p>
              </div>
            </div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Date of Arriving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.dateofreturn}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Time of Arriving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.returnTime}
                </p>
              </div>
            </div>
            <div className="flex">
              <h2>
                Reason<span className="px-6"></span>:
              </h2>
              <p className="px-4 text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                {outpass.reason}
              </p>
            </div>
            <div className="flex">
              <h2>
                Remarks<span style={{padding:"5rem 5rem 0 0"}}></span>:
              </h2>
              <p className="px-4 text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                {outpass.remarks}
              </p>
            </div>
            <div>
              <h2>Uploaded Document</h2>
            </div>
           {
            controls?
            ( <div style={{position:'relative',left:'45rem'}}>
              <Button
              icon="pi pi-check"
              label="Confirm"
              className="mr-2"
              onClick={() => onConfirmStatus()}
            ></Button>
            <Button
              icon="pi pi-times"
              label="Reject"
              className="p-button-danger p-button-outlined ml-3"
              onClick={() => onRejectStatus()}
            ></Button>
              </div>):<></>
           }
          </Card>
        </Dialog>
        <Dialog header="Remarks" style={{width:"30rem"}} visible={remarkDialog} footer ={remarksFooter} blockScroll={true} onHide={()=>setRemarkDialog(false)}>
        <InputTextarea value={remarks} onChange={(e)=>setRemarks(e.target.value)} cols={40} rows={5} autoResize/>
        </Dialog>
    </>
  )
}

export default Outpass