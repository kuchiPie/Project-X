import React from 'react'
import { Divider } from 'primereact/divider';

function PersonalTab() {
    return (
        <>
            <div className="grid p-fluid">
                <div className="col">
                    <h3 className="my-2 font-bold mt-6">Parents Details</h3>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between ">
                                <h4 className="m-0">Father's Name</h4>
                                <h4 className="m-0 font-semibold">Horoshi Nohara</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Mother's Name</h4>
                                <h4 className="m-0 font-semibold">Misai Nohara</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Date Of Birth</h4>
                                <h4 className="m-0 font-semibold">65-67-5656</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Email</h4>
                                <h4 className="m-0 font-semibold">sinchannohara@gmail.com</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Alternate email</h4>
                                <h4 className="m-0 font-semibold">-</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Nationality</h4>
                                <h4 className="m-0 font-semibold">Japanese</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Gender</h4>
                                <h4 className="m-0 font-semibold">Male</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Blood Group</h4>
                                <h4 className="m-0 font-semibold">AB+</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Mobile No.</h4>
                                <h4 className="m-0 font-semibold">335534627637</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <h4 className="m-0 font-semibold">-</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Category</h4>
                                <h4 className="m-0 font-semibold">OBC</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Mother Tongue</h4>
                                <h4 className="m-0 font-semibold">Japanese</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                    </div>


                    <h3 className="my-2 font-bold mt-6">Guardians Details</h3>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Name</h4>
                                <h4 className="m-0 font-semibold">Horoshi Nohara</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Relation</h4>
                                <h4 className="m-0 font-semibold">Pet</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Email</h4>
                                <h4 className="m-0 font-semibold">shiro@gmail.com</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Mobile No.</h4>
                                <h4 className="m-0 font-semibold">335534627637</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <h4 className="m-0 font-semibold">-</h4>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PersonalTab;