import React, { useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import NewOutpass from './NewOutpass.js';
import CurrentOutpass from './CurrentOutpass.js';
import OutpassHistory from './OutpassHistory.js';
import { useDispatch, useSelector } from 'react-redux';
import {createOutpass, getcurrentOutpass} from '../../../reduxSlices/outpassSlice'
import NoCurrent from './NoCurrentOutpass.js';
import ViewOutpassHistory from '../../faculty/components/ViewOutpassHistory.js';

function Output() {
    const dispatch = useDispatch()

    const toast = useRef(null);

    const {currentOutpass, status} = useSelector(state => state.outpass)
    const id = useSelector(state => state.login.loggedUser._id) 
    
    const newOutpassSubmitHandler=(outpass)=>{
        dispatch(createOutpass(outpass))
    }
    
    console.log(currentOutpass)
    if(status === 'toRun'){
        console.log('h')
        dispatch(getcurrentOutpass(id))
    }

    let noofdays, value=0
    if(currentOutpass !== null && currentOutpass !== {} && currentOutpass !== ""){
        const date1 = new Date(currentOutpass.dateofjourney);
        const date2 = new Date(currentOutpass.dateofreturn);

        let Difference_In_Time = date2.getTime() - date1.getTime();
        noofdays = Difference_In_Time / (1000 * 3600 * 24);
        if(currentOutpass.approvalStatus === "notApproved"){
            value = 0
        }
        else if(currentOutpass.approvalStatus === "facApproved"){
            if(noofdays>10){
                value = 34
            } else {
                value = 50
            }
        }
        else if(currentOutpass.approvalStatus === "corApproved"){
            value = 66
        }
        else{
            value = 100
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <Card className="w-full h-full mx-5 surface-100">
                <h1 className="m-0 font-semibold">Your Outpass</h1>

                {/* Progress Bar Card */}
                { (currentOutpass === null || currentOutpass === "" || currentOutpass === {}) ?
                <NoCurrent/> :
                <Card className="m-3 p-0 border-2 border-gray-800">
                    {currentOutpass.isApproved?<h2 className='mt-0 flex justify-content-center'>OUTPASS APPROVED!!!</h2>:<></>}
                    {currentOutpass.isRejected?<h2 className='mt-0 flex justify-content-center'>Outpass Request Rejected. Check Remarks for reason.</h2>:<></>}
                    <div className="col">
                        <ProgressBar value={value} showValue={false} />
                    </div>
                    
                    <div className="grid formgrid">
                        {noofdays>10? 
                        <>
                            <div className="col-12 mb-2 lg:col lg:mb-0 flex justify-content-center">
                                <h3 className="m-0 font-semibold">Faculty Advisor</h3>
                            </div>
                            <div className="col-12 mb-2 lg:col lg:mb-0 flex justify-content-center">
                                <h3 className="m-0 font-semibold">{value === 34 ? currentOutpass.SWC : 'SWC'}</h3>
                            </div>
                            <div className="col-12 mb-2 lg:col lg:mb-0 flex justify-content-center">
                                <h3 className="m-0 font-semibold">{value === 66 ? currentOutpass.warden : 'Warden'}</h3>
                            </div>
                        </>
                        :
                        <>
                            <div className="col-12 mb-2 lg:col lg:mb-0 flex justify-content-center">
                                <h3 className="m-0 font-semibold">Faculty Advisor</h3>
                            </div>
                            <div className="col-12 mb-2 lg:col lg:mb-0 flex justify-content-center">
                                <h3 className="m-0 font-semibold">{value === 50 ? currentOutpass.warden : 'Warden'}</h3>
                            </div>
                        </>
                        }
                    </div>
                </Card>}
                <div className="grid formgrid">
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <NewOutpass newOutpassFunc={newOutpassSubmitHandler}/>
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