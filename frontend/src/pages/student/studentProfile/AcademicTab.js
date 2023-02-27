import React from 'react'
import { Divider } from 'primereact/divider';

// import { useDispatch, useSelector } from 'react-redux';
// import { getStudentByID } from '../../../reduxSlices/studentSlice';

function AcademicTab({student}) {

    // const dispatch = useDispatch()

    // const { loggedUser } = useSelector(state=> state.login)
 
    // const student = dispatch(getStudentByID(loggedUser._id))
    return (
        <>
            <div className="grid p-fluid">
                <div className="col">
                    <h3 className="my-2 font-bold mt-6">Degree Details</h3>
                    <Divider className="my-4" layout="horizontal"></Divider>

                    <div className="flex w-full">
                        <div className='w-full'>
                            <div className="flex justify-content-between ">
                                <h5 className="m-0">Degree Name</h5>
                                <h5 className="m-0 font-semibold">{student.degree}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Degree Type</h5>
                                <h5 className="m-0 font-semibold">Regular</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Branch</h5>
                                <h5 className="m-0 font-semibold">{student.branch}</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Batch Year</h5>
                                <h5 className="m-0 font-semibold">{student.batch}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">From date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">To date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                        </div>
                    </div>

                    <h5 className="my-2 font-bold mt-6">Guide Details</h5>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="flex w-full">
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Name</h5>
                                <h5 className="m-0 font-semibold">{student.facultyAdvisor}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">From date</h5>
                                <h5 className="m-0 font-semibold">{student.guideFrom}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">To date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">{student.facultyAdvisor.email}</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">335534627637</h5>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
}

export default AcademicTab;



