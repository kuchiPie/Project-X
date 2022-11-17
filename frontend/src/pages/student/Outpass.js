import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import TimePicker from 'react-time-picker';

function Output() {
    const [value, setValue] = useState(0);
    const [inputNumberValue, setInputNumberValue] = useState(null);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayCurrent, setDisplayCurrent] = useState(false);
    const [displayHistory, setDisplayHistory] = useState(false);
    const interval = useRef(null);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [calendarValue, setCalendarValue] = useState(null);
    const [tvalue, onChange] = useState('10:00');

    const dropdownBranch = [
        { branch: 'DSAI' },
        { branch: 'CSE' },
        { branch: 'ECE' }
    ];
    const dropdownSemester = [
        { semester: 'I' },
        { semester: 'II' },
        { semester: 'III' },
        { semester: 'IV' },
        { semester: 'V' },
        { semester: 'VI' },
        { semester: 'VII' },
        { semester: 'VIII' }
    ];
    const dropdownGender = [
        { gender: 'Male' },
        { gender: 'Female' },
        { gender: 'Other' }
    ];

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
    const basicDialogFooter = <Button type="button" label="Create Outpass" onClick={() => setDisplayBasic(false)} icon="pi pi-check" className="p-button-secondary" />;

    return (
        <>
            <Card className="w-full h-full mx-5">
                <h1 className="m-0 font-semibold">Your Outpass</h1>
                <Card className="m-3 p-0 surface-200 border-2 border-gray-800">
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
                        <Button type="button" label="New Outpass" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />
                        <Dialog header="New Outpass" visible={displayBasic} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <Card className="h-full mx-5 border-2 border-gray-800 surface-200">
                                <div className="flex justify-content-between ">
                                    <h2 className="m-0 font-semibold">Shichan Nohara</h2>
                                    <h2 className="m-0">20BDS022</h2>
                                </div>
                                <Divider className="mb-7" layout="horizontal"></Divider>
                                <div className="grid formgrid  ">
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-between">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownBranch} optionLabel="branch" placeholder="Branch" />
                                    </div>
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownSemester} optionLabel="semester" placeholder="Semester" />
                                    </div>
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownGender} optionLabel="gender" placeholder="Gender" />
                                    </div>
                                </div>
                                <Divider layout="horizontal"></Divider>
                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <div className="flex justify-content-between ">
                                            <h4 className="m-0 font-semibold">Hostel room no.</h4>
                                            <InputText type="number"></InputText>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Date of Leaving</h4>
                                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Date Of Returnin</h4>
                                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                    </div>

                                    <div className="col-12 md:col-6">
                                        <div className="flex justify-content-between">
                                            <h4 className="m-0 font-semibold">Contact no.</h4>
                                            <InputText type="number"></InputText>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Time of Leaving</h4>
                                            <TimePicker onChange={onChange} value={tvalue} />
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Time of Returning</h4>
                                            <TimePicker onChange={onChange} value={tvalue} />
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                    </div>
                                    <div className="field col-12 flex justify-content-between ">
                                        <h4 className="mr-5 mt-0">Reason</h4>
                                        <InputTextarea className="w-full" id="address" rows="4" />
                                    </div>
                                </div>
                            </Card>
                        </Dialog>
                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <Button type="button" label="Current Outpass" icon="pi pi-external-link" onClick={() => setDisplayCurrent(true)} />
                        <Dialog header="Current Outpass" visible={displayCurrent} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayCurrent(false)}>
                            <Card className="h-full mx-5 border-2 border-gray-800 surface-200">
                                <div className="flex justify-content-between ">
                                    <h2 className="m-0 font-semibold">Shichan Nohara</h2>
                                    <h2 className="m-0">20BDS022</h2>
                                </div>
                                <Divider className="mb-7" layout="horizontal"></Divider>
                                <div className="grid formgrid  ">
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-between">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownBranch} optionLabel="branch" placeholder="Branch" />
                                    </div>
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownSemester} optionLabel="semester" placeholder="Semester" />
                                    </div>
                                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                                        <Dropdown className="w-full" value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownGender} optionLabel="gender" placeholder="Gender" />
                                    </div>
                                </div>
                                <Divider layout="horizontal"></Divider>
                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <div className="flex justify-content-between ">
                                            <h4 className="m-0 font-semibold">Hostel room no.</h4>
                                            <InputText type="number"></InputText>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Date of Leaving</h4>
                                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Date Of Returnin</h4>
                                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                    </div>

                                    <div className="col-12 md:col-6">
                                        <div className="flex justify-content-between">
                                            <h4 className="m-0 font-semibold">Contact no.</h4>
                                            <InputText type="number"></InputText>
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Time of Leaving</h4>
                                            <TimePicker onChange={onChange} value={tvalue} />
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                        <div className="flex justify-content-between my-5">
                                            <h4 className="m-0 font-semibold">Time of Returning</h4>
                                            <TimePicker onChange={onChange} value={tvalue} />
                                        </div>
                                        <Divider layout="horizontal"></Divider>
                                    </div>
                                    <div className="field col-12 flex justify-content-between ">
                                        <h4 className="mr-5 mt-0">Reason</h4>
                                        <InputTextarea className="w-full" id="address" rows="4" />
                                    </div>
                                    <div className="field col-12 flex justify-content-between ">
                                        <h4 className="mr-5 mt-0">Remarks</h4>
                                        <InputTextarea className="w-full" id="address" rows="4" />
                                    </div>
                                </div>
                            </Card>
                        </Dialog>
                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0 flex justify-content-center">
                        <Button type="button" label="Outpass History" icon="pi pi-folder-open" onClick={() => setDisplayHistory(true)} />
                        <Dialog header="History" visible={displayHistory} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayHistory(false)}>
                            <Card header="No History" className="h-full mx-5 border-2 border-gray-800 surface-200">
                            </Card>
                        </Dialog>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Output;