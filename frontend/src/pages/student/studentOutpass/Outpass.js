import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import NewOutpass from './NewOutpass.js';
import CurrentOutpass from './CurrentOutpass.js';
import OutpassHistory from './OutpassHistory.js';
import storage from '../../../firebase/firebase.js';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'
import { useSelector } from 'react-redux';

function Output() {
    const toast = useRef(null);
    const [value, setValue] = useState(0);
    const interval = useRef(null);
    const studentId = useSelector(state => state.login.loggedUser._id)

    // All data fields
    const [leaveDate, setLeaveDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [leaveTime, setLeaveTime] = useState('10:00');
    const [returnTime, setReturnTime] = useState('10:00');
    const [isticketLoading,setticketLoading] = useState(false);
    const [ticketUrl,setTicketUrl] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [reason, setreason] = useState(null);
    const [hostelRoom, sethostelRoom] = useState(null);

    const newOutpassSubmitHandler=()=>{
        const newOutpass = {
            leaveDate, returnDate, leaveTime, returnTime, ticket: ticketUrl, studentId, contactNo, reason, hostelRoom
        }
        console.log(newOutpass)
    }

    const handleleavetime = (newValue) => {
        setLeaveTime(newValue);
    };
    
    const muUploader =async ({files})=>{
        console.log(files[0]);
        const imageRef=ref(storage,`tickets/${files[0].name+v4()}`)
        try {
            setticketLoading(true);
            const response = await uploadBytes(imageRef,files[0]);
            const url = await getDownloadURL(response.ref);
            setTicketUrl(url);
            setticketLoading(false);
            console.log(response);
            toast.current.show({severity:'info', summary: 'Ticket Upload Successful', life: 3000});
        } catch (error) {
            toast.current.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
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

    return (
        <>
            <Toast ref={toast} />
            <Card className="w-full h-full mx-5 surface-100">
                <h1 className="m-0 font-semibold">Your Outpass</h1>

                {/* Progress Bar Card */}
                <Card className="m-3 p-0 border-2 border-gray-800">
                    <div className="col">
                        <ProgressBar value={value} showValue={false} />
                    </div>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                            <h3 className="m-0 font-semibold">Faculty Advisor</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                            <h3 className="m-0 font-semibold">SWC</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                            <h3 className="m-0 font-semibold">Warden / Assistant warden</h3>
                        </div>
                    </div>
                </Card>
                <div className="grid formgrid">
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <NewOutpass />
                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <CurrentOutpass />
                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <OutpassHistory />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Output;