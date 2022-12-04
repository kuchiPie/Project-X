import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputTextarea } from 'primereact/inputtextarea';

function CurrentOutpass() {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayCurrent, setDisplayCurrent] = useState(false);

    const currentDialogFooter = <Button type="button" label="Withdraw" onClick={() => setDisplayBasic(false)} icon="pi pi-arrow-circle-right" className="p-button-secondary" />;

    return (
        <>
            <Button type="button" label="Current Outpass" icon="pi pi-external-link" onClick={() => setDisplayCurrent(true)} />
            <Dialog header="Current Outpass" visible={displayCurrent} style={{ width: '80vw' }} modal footer={currentDialogFooter} onHide={() => setDisplayCurrent(false)}>
                <Card className="h-full mx-5 border-2 border-gray-800 surface-100">
                    <div className="flex justify-content-between ">
                        <h2 className="m-0 font-semibold">Shichan Nohara</h2>
                        <h2 className="m-0">20BDS022</h2>
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
                                <h3 className="m-0 font-semibold">216</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date of Leaving</h3>
                                <h3 className="m-0 font-semibold">10-24-2432</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Date Of Returnin</h3>
                                <h3 className="m-0 font-semibold">10-24-2432</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h3 className="m-0">Contact no.</h3>
                                <h3 className="m-0 font-semibold">8506092359</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Leaving</h3>
                                <h3 className="m-0 font-semibold">10:43AM</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h3 className="m-0">Time of Returning</h3>
                                <h3 className="m-0 font-semibold">10:43AM</h3>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 mt-0 w-1">Reason</h3>
                            <InputTextarea className="w-full" id="address" rows="4" disabled={true} value="afbsknsklbnfknvksnfkvspkfpqeriqerpivnadfvnsokfvfnvokfsvskflkvmslkfblkavlkavkfnbsknbfkvnaokfnkvsfkvnoskn" />
                        </div>
                        <div className="field col-12 flex justify-content-between ">
                            <h3 className="mr-5 mt-0 w-1">Remarks</h3>
                            <InputTextarea className="w-full" id="address" rows="4" disabled={true} value="fkbskpnfsofokvmf,v fkdvs" />
                        </div>
                    </div>
                </Card>
            </Dialog>
        </>
    );
}

export default CurrentOutpass;