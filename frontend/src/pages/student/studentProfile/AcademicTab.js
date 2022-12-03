import React from 'react'
import { Divider } from 'primereact/divider';

function AcademicTab() {
    return (
        <>
        <div className="col">
                                    <h3 className="my-2 font-bold mt-6">Degree Details</h3>
                                    <Divider className="mb-7" layout="horizontal"></Divider>
                                    <div className="grid">
                                        <div className="col-12 md:col-6">
                                            <div className="flex justify-content-between ">
                                                <h4 className="m-0 font-semibold">Degree Name</h4>
                                                <h4 className="m-0">Bachelor of Technology</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">Degree Type</h4>
                                                <h4 className="m-0">Regular</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">Branch</h4>
                                                <h4 className="m-0">Data Science</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                        </div>

                                        <div className="col-12 md:col-6">
                                            <div className="flex justify-content-between">
                                                <h4 className="m-0 font-semibold">Batch Year</h4>
                                                <h4 className="m-0">2020</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">From date</h4>
                                                <h4 className="m-0">45-34-2313</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">To date</h4>
                                                <h4 className="m-0">45-34-2313</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                        </div>
                                    </div>


                                    <h3 className="my-2 font-bold mt-6">Guide Details</h3>
                                    <Divider className="mb-7" layout="horizontal"></Divider>
                                    <div className="grid">
                                        <div className="col-12 md:col-6">
                                            <div className="flex justify-content-between">
                                                <h4 className="m-0 font-semibold">Name</h4>
                                                <h4 className="m-0">Horoshi Nohara</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">From date</h4>
                                                <h4 className="m-0">45-34-2313</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between">
                                                <h4 className="m-0 font-semibold">To date</h4>
                                                <h4 className="m-0">45-34-2313</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                        </div>

                                        <div className="col-12 md:col-6">
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">Email</h4>
                                                <h4 className="m-0">sdngngf@gmail.com</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>
                                            <div className="flex justify-content-between my-5">
                                                <h4 className="m-0 font-semibold">Mobile No.</h4>
                                                <h4 className="m-0">335534627637</h4>
                                            </div>
                                            <Divider layout="horizontal"></Divider>

                                        </div>
                                    </div>
                                </div>
        </>
    );
}

export default AcademicTab;