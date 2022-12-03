import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import TimePicker from 'react-time-picker';
import storage from '../../../firebase/firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FileUpload } from 'primereact/fileupload';
import { v4 } from 'uuid'
import { Image } from 'primereact/image';


function NewOutpass() {
    const toast = useRef(null);
    const [value, setValue] = useState(0);
    const [displayBasic, setDisplayBasic] = useState(false);
    const interval = useRef(null);

    // All data fields
    const [leaveDate, setLeaveDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [leaveTime, setLeaveTime] = useState('10:00');
    const [returnTime, setReturnTime] = useState('10:00');
    const [isticketLoading, setticketLoading] = useState(false);
    const [ticketUrl, setTicketUrl] = useState(null);

    const newOutpassSubmitHandler = () => {

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

    useEffect(() => {
        let val = value;
        interval.current = setInterval(() => {
            val += 34;

            if (val >= 100) {
                val = 100;
                clearInterval(interval.current);
            }
            setValue(val);
        }, 9000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, [value]);


    const basicDialogFooter = <Button type="button" label="Create Outpass" onClick={newOutpassSubmitHandler} icon="pi pi-check" className="p-button-secondary" />;


    return (
        <>
            <Button type="button" label="New Outpass" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />
            <Dialog header="New Outpass" visible={displayBasic} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                <Card className="h-full mx-5 border-2 border-gray-800 surface-100">
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
                                <InputText className="w-15rem" type="number"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date of Leaving</h3>
                                <Calendar className="w-15rem" showIcon showButtonBar value={leaveDate} onChange={(e) => setLeaveDate(e.value)}></Calendar>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0 ">Date Of Returning</h3>
                                <Calendar className="w-15rem" showIcon showButtonBar value={returnDate} onChange={(e) => setReturnDate(e.value)}></Calendar>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h3 className="m-0">Contact no.</h3>
                                <InputText className="w-15rem" type="number"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Leaving</h3>
                                {/* <div class="field col-12 md:col-4">
                                                <p:outputLabel for="timeonly" value="Time Only" />
                                                <p:datePicker id="timeonly" value="#{calendarView.date14}" timeOnly="true" pattern="HH:mm" />
                                            </div> */}
                                <TimePicker className="w-15rem p-2 bg-white border-round-md h-3rem" id="timeonly" timeOnly="true" pattern="HH:mm" onChange={setLeaveTime} disableClock={false} value={leaveTime} />
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Returning</h3>
                                <TimePicker className="w-15rem p-2 bg-white border-round-md h-3rem" onChange={setReturnTime} value={returnTime} />
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 w-1">Reason</h3>
                            <InputTextarea className="w-full" id="address" rows="4" />
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