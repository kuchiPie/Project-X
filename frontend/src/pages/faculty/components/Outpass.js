import React,{useState} from 'react'
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

const Outpass = ({outpass,showOutpassDialog,setShowOutpassDialog}) => {
    
    const [selectedOutpass, setSelectedOutpass] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const statuses = ["Pending", "Approved", "Rejected"];

    
      const onConfirmStatus = (outpass) => {
        outpass.status = "Rejected";
        setShowOutpassDialog(false);
      };
      const onRejectStatus = (outpass) => {
        outpass.status = "Rejected";
        setShowOutpassDialog(false);
      };

    
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
          <Card className="shadow-6 px-7">
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
                  {outpass.hostel_room}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Contact No <span className="px-4"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3">
                  {outpass.contact_no}
                </p>
              </div>
            </div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Date of Leaving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.date_of_leaving}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Time of Leaving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.time_of_leaving}
                </p>
              </div>
            </div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Date of Arriving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.date_of_arriving}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Time of Arriving<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                  {outpass.time_of_arrival}
                </p>
              </div>
            </div>
            <div className="flex">
              <h2>
                Reason<span className="px-6"></span>:
              </h2>
              <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-3 ">
                {outpass.reason}
              </p>
            </div>
            <div>
              <h2>Uploaded Document</h2>
            </div>
          </Card>
        </Dialog>
    </>
  )
}

export default Outpass