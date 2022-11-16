import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';

function Student(){
    return (
        <><h3>STUDENT PROFILE</h3>
            <div className="grid">
                <div className="col-12 lg:col-3 xl:col-3">
                    <Card className=" flex justify-content-center">
                        <div className="flex flex-column">
                            <Image src="/images/shin.jpg" alt="profile-photo" width={250} preview />
                            <h4 className="flex justify-content-center my-1">Shinchan Nohara</h4>
                            <h5 className="flex justify-content-center my-1">B.Tech</h5>
                            <h5 className="flex justify-content-center my-1">DSAI</h5>
                            <Button label="Edit Profile" icon="pi pi-pencil" />
                        </div>
                    </Card>
                </div>
                <div className="col-12 lg:col-9 xl:col-9">
                    <Card className="mb-0">
                        <TabView className='font-bold text-xl'>
                            <TabPanel header="Personal" width="100%">
                                <div className="grid p-fluid">
                                    <div className="col">
                                        <h3 className="my-2 font-bold mt-6">Parents Details</h3>
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


                                        <h3 className="my-2 font-bold mt-6">Guardians Details</h3>
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
                            </TabPanel>
                            <TabPanel header="Other">
                                <p>dkvalkfnvkonokafkvmapkvmpkmv</p>
                            </TabPanel>
                        </TabView>
                    </Card>
                </div>
            </div>

        </>
    );
}

export default Student;