import React from 'react'
import { Divider } from 'primereact/divider';

function PersonalTab() {
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
                                <h5 className="m-0 font-semibold">Horoshi Nohara</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mother's Name</h5>
                                <h5 className="m-0 font-semibold">Misai Nohara</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Date Of Birth</h5>
                                <h5 className="m-0 font-semibold">65-67-5656</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">sinchannohara@gmail.com</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate email</h5>
                                <h5 className="m-0 font-semibold">-</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Nationality</h5>
                                <h5 className="m-0 font-semibold">Japanese</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Gender</h5>
                                <h5 className="m-0 font-semibold">Male</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Blood Group</h5>
                                <h5 className="m-0 font-semibold">AB+</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">335534627637</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate Mobile No.</h5>
                                <h5 className="m-0 font-semibold">-</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Category</h5>
                                <h5 className="m-0 font-semibold">OBC</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mother Tongue</h5>
                                <h5 className="m-0 font-semibold">Japanese</h5>
                            </div>
                        </div>
                    </div>

                    <h3 className="my-2 font-bold mt-6">Guardians Details</h3>
                    <Divider className="my-4" layout="horizontal"></Divider>


                    <div className="flex">
                        <div className="w-full">
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Name</h5>
                                <h5 className="m-0 font-semibold">Horoshi Nohara</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Relation</h5>
                                <h5 className="m-0 font-semibold">Pet</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className="w-full">
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">shiro@gmail.com</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">335534627637</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Alternate Mobile No.</h5>
                                <h5 className="m-0 font-semibold">-</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default PersonalTab;