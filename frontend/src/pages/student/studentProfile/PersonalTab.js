import React from 'react'
import { Divider } from 'primereact/divider';

function PersonalTab({student}) {
    const dob = new Date(student.dateOfBirth)
    const [day,month,year] = [dob.getDate(),dob.getMonth()+1,dob.getFullYear()]
    return (
        <>
            <div className="grid p-fluid">
                <div className="col">
                    <h3 className="my-2 font-bold mt-6">Parents Details</h3>
                    <Divider className="my-4" layout="horizontal"></Divider>

                    <div className="flex w-full">
                        <div className='w-full'>
                            <div className="flex justify-content-between ">
                                <h5 className="m-0">Father's Name</h5>
                                <h5 className="m-0 font-semibold">{student.fatherName}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mother's Name</h5>
                                <h5 className="m-0 font-semibold">{student.motherName}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Date Of Birth</h5>
                                <h5 className="m-0 font-semibold">{day+"/"+month+"/"+year}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">{student.email}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate email</h5>
                                <h5 className="m-0 font-semibold">{student.altEmail}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Nationality</h5>
                                <h5 className="m-0 font-semibold">{student.nationality}</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Gender</h5>
                                <h5 className="m-0 font-semibold">{student.gender}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Blood Group</h5>
                                <h5 className="m-0 font-semibold">{student.bloodGroup}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">{student.mobileNo}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate Mobile No.</h5>
                                <h5 className="m-0 font-semibold">-</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Category</h5>
                                <h5 className="m-0 font-semibold">{student.category}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mother Tongue</h5>
                                <h5 className="m-0 font-semibold">{student.motherTongue}</h5>
                            </div>
                        </div>
                    </div>

                    <h3 className="my-2 font-bold mt-6">Guardians Details</h3>
                    <Divider className="my-4" layout="horizontal"></Divider>


                    <div className="flex">
                        <div className="w-full">
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Name</h5>
                                <h5 className="m-0 font-semibold">{student.gardiansName}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Relation</h5>
                                <h5 className="m-0 font-semibold">{student.gardiansRelation}</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className="w-full">
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">{student.gardiansEmail}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">{student.gardiansMobile}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate Mobile No.</h5>
                                <h5 className="m-0 font-semibold">{student.gardiansAltMobile}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default PersonalTab;