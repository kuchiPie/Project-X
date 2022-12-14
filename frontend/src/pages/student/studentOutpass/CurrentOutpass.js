import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputTextarea } from 'primereact/inputtextarea';
import {useDispatch, useSelector} from 'react-redux'
import { withdrawOutpass } from '../../../reduxSlices/outpassSlice';

function CurrentOutpass() {

    const [setDisplayBasic] = useState(false);
    const [displayCurrent, setDisplayCurrent] = useState(false);

    let isbtndisable = false
    let current = useSelector(state => state.outpass.currentOutpass)
    const user = useSelector(state => state.login.loggedUser)
    if(current === null || current === ""){
        isbtndisable = true
        current = {
            hostelRoom: '',
            dateofjourney: new Date().toUTCString(),
            dateofreturn: new Date().toUTCString(),
            contactNo: "",
            reason: "",
            leaveTime: "",
            returnTime: "",
            remarks: ""
        }
    }
    const dispatch = useDispatch()
    const withdraw = () => {
        dispatch(withdrawOutpass(user._id))
        setDisplayCurrent(false)
    }
    let withdrawbtndisable = false
    if(current.approvalStatus !== 'notApproved'){
        withdrawbtndisable = true
    }

    

    console.log(current)

    const currentDialogFooter = <div className='pt-5 flex justify-content-end align-items-center' style={{position:"relative", right:"1rem"}}>
    {withdrawbtndisable?<div className='text-xl font-bold'>Too late my brotha/sista</div>:<></>} <Button type="button" label="Withdraw" onClick={withdraw} disabled={withdrawbtndisable} icon="pi pi-arrow-circle-right" className="p-button-secondary ml-3"/>
    </div>

    return (
        <>
            <Button type="button" disabled={isbtndisable} label="Current Outpass" icon="pi pi-external-link" onClick={() => setDisplayCurrent(true)} />
            <Dialog header="Current Outpass" visible={displayCurrent} style={{ width: '80vw' }} modal footer={currentDialogFooter} onHide={() => setDisplayCurrent(false)}>
                <Card className="h-full mx-5 border-2 border-gray-800 surface-100">
                    <div className="flex justify-content-between ">
                        <h2 className="m-0 font-semibold">Shichan Nohara</h2>
                        <h2 className="m-0">{user.rollno}</h2>
                    </div>
                    <Divider className="mb-5" layout="horizontal"></Divider>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 pr-5 flex justify-content-between">
                            <h3 className="m-0">Branch</h3>
                            <h3 className="m-0 font-semibold">DSAI</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-between">
                            <h3 className="m-0">Semester</h3>
                            <h3 className="m-0 font-semibold">VII</h3>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0 pl-5 flex justify-content-between">
                            <h3 className="m-0">Gender</h3>
                            <h3 className="m-0 font-semibold">Male</h3>
                        </div>
                    </div>
                    <Divider layout="horizontal"></Divider>
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between ">
                                <h3 className="m-0">Hostel room no.</h3>
                                <h3 className="m-0 font-semibold">{current.hostelRoom}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date of Leaving</h3>
                                <h3 className="m-0 font-semibold">{current.dateofjourney.substring(0,10)}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date Of Returnin</h3>
                                <h3 className="m-0 font-semibold">{current.dateofreturn.substring(0,10)}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h3 className="m-0">Contact no.</h3>
                                <h3 className="m-0 font-semibold">{current.contactNo}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Leaving</h3>
                                <h3 className="m-0 font-semibold">{current.leaveTime}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Returning</h3>
                                <h3 className="m-0 font-semibold">{current.returnTime}</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 mt-0 w-1">Reason</h3>
                            <InputTextarea className="w-full" id="address" rows="4" disabled={true} value={current.reason}/>
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 mt-0 w-1">Remarks</h3>
                            <InputTextarea className="w-full" id="address" rows="4" disabled={true} value={current.remarks} />
                        </div>
                    </div>
                </Card>
            </Dialog>
        </>
    );
}

export default CurrentOutpass;