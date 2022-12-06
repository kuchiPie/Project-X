import React, { useState } from 'react'
import { Divider } from 'primereact/divider';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function EditProfile() {
    const [displayEditProfile, setDisplayEditProfile] = useState(false);

    const basicDialogFooter = <Button type="button" label="Save" icon="pi pi-check" className="p-button-secondary" />;

    return (
        <><Button type="button" label="Edit Profile" icon="pi pi-pencil" onClick={() => setDisplayEditProfile(true)} />
            <Dialog blockScroll header="Edit Profile" visible={displayEditProfile} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayEditProfile(false)}>
                <div className="col">
                    <h2 className="my-2 font-bold mt-6">Parents Details</h2>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="grid text-xl">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between ">
                                <h4 className="m-0">Father's Name</h4>
                                <InputText className="w-15rem"  defaultValue="Horoshi Nohara"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between ">
                                <h4 className="m-0">Mother's Name</h4>
                                <InputText className="w-15rem"  defaultValue="Misai Nohara"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Date Of Birth</h4>
                                <InputText className="w-15rem"  defaultValue="65-67-5656"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Email</h4>
                                <InputText className="w-15rem"  defaultValue="sinchannohara@gmail.com"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate email</h4>
                                <InputText className="w-15rem"  defaultValue="-"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Nationality</h4>
                                <InputText className="w-15rem"  defaultValue="Japanese"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Gender</h4>
                                <InputText className="w-15rem"  defaultValue="Male"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Blood Group</h4>
                                <InputText className="w-15rem"  defaultValue="AB+"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mother Tongue</h4>
                                <InputText className="w-15rem" defaultValue="Japanese"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mobile No.</h4>
                                <InputText className="w-15rem"  defaultValue="335534627637"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <InputText className="w-15rem"  defaultValue="-"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Category</h4>
                                <InputText className="w-15rem" disabled={true} defaultValue="OBC"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>
                    </div>


                    <h2 className="my-2 font-bold mt-6">Guardians Details</h2>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="grid text-xl">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Name</h4>
                                <InputText className="w-15rem"  defaultValue="Horoshi Nohara"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Relation</h4>
                                <InputText className="w-15rem"  defaultValue="Pet"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Email</h4>
                                <InputText className="w-15rem"  defaultValue="shiro@gmail.com"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mobile No.</h4>
                                <InputText className="w-15rem"  defaultValue="335534627637"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <InputText className="w-15rem"  defaultValue="-"></InputText>
                            </div>
                        </div>
                        <Divider layout="horizontal"></Divider>
                    </div>
                </div>
            </Dialog>

        </>
    );
}

export default EditProfile;