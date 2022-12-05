import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import storage from '../../../firebase/firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FileUpload } from 'primereact/fileupload';
import { v4 } from 'uuid'
import { Image } from 'primereact/image';
import { useSelector } from 'react-redux';


function NewOutpass({newOutpassFunc}) {
    const toast = useRef(null);
    const [displayBasic, setDisplayBasic] = useState(false);
    const studentId = useSelector(state => state.login.loggedUser._id)

    // All data fields
    const [leaveDate, setLeaveDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [leaveTime, setLeaveTime] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [isticketLoading, setticketLoading] = useState(false);
    const [ticketUrl, setTicketUrl] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [reason, setreason] = useState(null);
    const [hostelRoom, sethostelRoom] = useState(null);

    const newOutpassSubmitHandler = () => {
        const newOutpass = {
            dateofjourney: leaveDate, dateofreturn: returnDate, ticket: ticketUrl, studentId, contactNo, reason, hostelRoom, leaveTime, returnTime
        }
        newOutpassFunc(newOutpass)
    }
    let isbtndisable = false
    const current = useSelector(state => state.outpass.currentOutpass)
    if(current === null || current !== ""){
        isbtndisable = true
    }

    const muUploader = async ({ files }) => {
        console.log(files[0]);
        const imageRef = ref(storage, `tickets/${files[0].name + v4()}`)
        try {
            setticketLoading(true);
            const response = await uploadBytes(imageRef, files[0]);
            const url = await getDownloadURL(response.ref);
            setTicketUrl(url);
            setticketLoading(false);
            console.log(response);
            toast.current.show({ severity: 'info', summary: 'Ticket Upload Successful', life: 3000 });
        } catch (error) {
            toast.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
        }
    }

    const basicDialogFooter = <Button type="button" label="Create Outpass" onClick={newOutpassSubmitHandler} icon="pi pi-check" className=" mt-4 p-button-secondary" />;


    return (
        <>
            <Button type="button" disabled={isbtndisable} label="New Outpass" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />
            <Dialog header="New Outpass" visible={displayBasic} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                <Card className="h-full mx-5 surface-100">
                    <div className="flex justify-content-between ">
                        <h2 className="m-0 font-semibold">Shichan Nohara</h2>
                        <h2 className="m-0">20BDS022</h2>
                    </div>
                    <Divider layout="horizontal"></Divider>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 pr-5 flex justify-content-between">
                            <h3 className="m-0 font-bold">Branch</h3>
                            <h3 className="m-0 font-semibold">DSAI</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-between">
                            <h3 className="m-0 font-bold">Semester</h3>
                            <h3 className="m-0 font-semibold">VII</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 pl-5 flex justify-content-between">
                            <h3 className="m-0 font-bold">Gender</h3>
                            <h3 className="m-0 font-semibold">Male</h3>
                        </div>
                    </div>
                    <Divider layout="horizontal"></Divider>
                    <div className="grid">

                        <div className="col-12 md:col-6">

                            <div className="flex justify-content-between ">
                                <h3 className="m-0">Hostel room no.</h3>
                                <InputText className="w-15rem" type="number" value={hostelRoom} onChange={(e) => sethostelRoom(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date of Leaving</h3>
                                <Calendar className="w-15rem" showIcon showButtonBar value={leaveDate} onChange={(e) => setLeaveDate(e.value)}></Calendar>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Leaving</h3>
                                <div className="flex">
                                    {/* <InputMask mask="10:00" value={leaveHour} onValueChange={(e) => setLeaveHour(e.value)} max={"23:59"}></InputMask>*/}
                                    {/* <InputNumber className="w-5rem" value={leaveMin} onValueChange={(e) => setLeaveMin(e.value)} max={59} />  */}
                                    {/* <InputNumber className="w-5rem" style={{ width: '3rem' }} value={leaveHour} onValueChange={(e) => setLeaveHour(e.value)} />
                                    <InputText className="w-5rem" type="number" max={23}></InputText> */}
                                    {/* <input className="w-full" value={leaveTime} onValueChange={(e) => setLeaveTime(e.value)} type="time" id="ltime" /> */}
                                    <input value={leaveTime} onChange={(e) => setLeaveTime(e.target.value)} type="time" id="ltime" />
                                </div>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h3 className="m-0">Contact no.</h3>
                                <InputText className="w-15rem" type="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0 ">Date Of Returning</h3>
                                <Calendar className="w-15rem" showIcon showButtonBar value={returnDate} onChange={(e) => setReturnDate(e.value)}></Calendar>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Returning</h3>
                                <input value={returnTime} onChange={(e) => setReturnTime(e.target.value)} type="time" id="rtime" />
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 w-1">Reason</h3>
                            <InputTextarea className="w-full" id="address" rows="4" value={reason} onChange={(e) => setreason(e.target.value)}/>
                        </div>
                        <Divider layout="horizontal"></Divider>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 w-1">Upload Ticket</h3>
                            {isticketLoading ? <h2>Uploading....</h2> : <></>}
                            {ticketUrl ? <Image src={ticketUrl} /> : <FileUpload className="w-full" accept='image/*' auto customUpload uploadHandler={muUploader}></FileUpload>}
                        </div>
                    </div>
                </Card>
            </Dialog>
        </>
    );
}

export default NewOutpass;