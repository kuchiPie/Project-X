import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

function Student(){
    return (
        <><h3>STUDENT PROFILE</h3>
            <div className="grid">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card flex justify-content-center">
                        <div className="flex flex-column">
                            <Image src="/images/shin.jpg" alt="profile-photo" width={250} preview />
                            <h4 className="flex justify-content-center my-1">Shinchan Nohara</h4>
                            <h5 className="flex justify-content-center my-1">B.Tech</h5>
                            <h5 className="flex justify-content-center my-1">DSAI</h5>
                            <Button label="Edit Profile" icon="pi pi-pencil" />
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-9">
                    <div className="card mb-0">
                        <TabView className='font-bold text-xl'>
                            <TabPanel header="Personal" width="100%">
                                <div className="grid p-fluid">
                                    <div className="col">
                                        <h3 className="my-2 font-bold">Parents Details</h3>
                                        <Divider className="mb-7" layout="horizontal"></Divider>
                                        <div className="grid">
                                            <div className="col-12 md:col-6">
                                                <div className="flex justify-content-between ">
                                                    <h4 className="m-0 font-semibold">Father's Name</h4>
                                                    <h4 className="m-0">Horoshi Nohara</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Mother's Name</h4>
                                                    <h4 className="m-0">Misai Nohara</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Date Of Birth</h4>
                                                    <h4 className="m-0">65-67-5656</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Email</h4>
                                                    <h4 className="m-0">sinchannohara@gmail.com</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Alternate email</h4>
                                                    <h4 className="m-0">-</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Nationality</h4>
                                                    <h4 className="m-0">Japanese</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                            </div>

                                            <div className="col-12 md:col-6">
                                                <div className="flex justify-content-between">
                                                    <h4 className="m-0 font-semibold">Gender</h4>
                                                    <h4 className="m-0">Male</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Blood Group</h4>
                                                    <h4 className="m-0">AB+</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Mobile No.</h4>
                                                    <h4 className="m-0">335534627637</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Alternate Mobile No.</h4>
                                                    <h4 className="m-0">-</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Category</h4>
                                                    <h4 className="m-0">OBC</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Mother Tongue</h4>
                                                    <h4 className="m-0">Japanese</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                            </div>
                                        </div>


                                        <h3 className="my-2 font-bold">Guardians Details</h3>
                                        <Divider className="mb-7" layout="horizontal"></Divider>
                                        <div className="grid">
                                            <div className="col-12 md:col-6">
                                                <div className="flex justify-content-between">
                                                    <h4 className="m-0 font-semibold">Name</h4>
                                                    <h4 className="m-0">Horoshi Nohara</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Relation</h4>
                                                    <h4 className="m-0">Pet</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                            </div>

                                            <div className="col-12 md:col-6">
                                                <div className="flex justify-content-between">
                                                    <h4 className="m-0 font-semibold">Email</h4>
                                                    <h4 className="m-0">shiro@gmail.com</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Mobile No.</h4>
                                                    <h4 className="m-0">335534627637</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                                <div className="flex justify-content-between my-5">
                                                    <h4 className="m-0 font-semibold">Alternate Mobile No.</h4>
                                                    <h4 className="m-0">-</h4>
                                                </div>
                                                <Divider layout="horizontal"></Divider>
                                            </div>
                                        </div>
                                    </div>
                                </div></TabPanel>
                            <TabPanel header="Academic">
                                <p>Laude fail hai tu academics mein, kya karega dekh ke</p>
                            </TabPanel>
                            <TabPanel header="Other">
                                <p>dkvalkfnvkonokafkvmapkvmpkmv</p>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Student;