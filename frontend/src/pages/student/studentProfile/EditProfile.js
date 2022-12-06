import React, { useState } from 'react'
import { Divider } from 'primereact/divider';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

function EditProfile() {
    const [displayEditProfile, setDisplayEditProfile] = useState(false);
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [name, setname] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [category, setCategory] = useState('');
    const [motherTongue, setMotherTongue] = useState('');
    const [gardiansName, setGaurdiansName] = useState('');
    const [gardiansEmail, setGaurdiansEmail] = useState('');
    const [gardiansRelation, setgaurdiansRelation] = useState('');
    const [gardiansMobile, setGaurdiansMobile] = useState('');
    const [gardiansAltMobile, setGaurdiansAltMobile] = useState('');
    const [guideFrom, setGuideFrom] = useState('');

    const genders = [
        { gender: 'Male' },
        { gender: 'Female' },
        { gender: 'Other' }
    ];

    const cats = [
        { cat: 'General' },
        { cat: 'OBC' },
        { cat: 'SC' }
    ];

    const basicDialogFooter = <Button type="button" label="Save" icon="pi pi-check" className="p-button-secondary" />;

    return (
        <><Button type="button" label="Edit Profile" icon="pi pi-pencil" onClick={() => setDisplayEditProfile(true)} />
            <Dialog blockScroll header="Edit Profile" visible={displayEditProfile} style={{ width: '80vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayEditProfile(false)}>
                <div className="col">
                    <div className="flex justify-content-between ">
                        <h2 className="m-0">Name</h2>
                        <InputText className="w-25rem" value={name} onChange={(e) => setname(e.target.value)}></InputText>
                    </div>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <h2 className="my-2 font-bold mt-6">Parents Details</h2>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="grid text-xl">
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between ">
                                <h4 className="m-0">Father's Name</h4>
                                <InputText className="w-15rem" value={fatherName} onChange={(e) => setFatherName(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between ">
                                <h4 className="m-0">Mother's Name</h4>
                                <InputText className="w-15rem" value={motherName} onChange={(e) => setMotherName(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Date Of Birth</h4>
                                <Calendar className="w-15rem" showIcon showButtonBar value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}></Calendar>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Email</h4>
                                <InputText className="w-15rem" value={email} onChange={(e) => setEmail(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate email</h4>
                                <InputText className="w-15rem" value={altEmail} onChange={(e) => setAltEmail(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Nationality</h4>
                                <InputText className="w-15rem" value={nationality} onChange={(e) => setNationality(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Gender</h4>
                                <Dropdown className="w-15rem" optionLabel="gender" value={gender} options={genders} onChange={(e) => setGender(e.target.value)} />
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Blood Group</h4>
                                <InputText className="w-15rem" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mother Tongue</h4>
                                <InputText className="w-15rem" value={motherTongue} onChange={(e) => setMotherTongue(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mobile No.</h4>
                                <InputText className="w-15rem" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <InputText className="w-15rem"></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Category</h4>
                                <Dropdown className="w-15rem" optionLabel="cat" value={category} options={cats} onChange={(e) => setCategory(e.target.value)} />
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
                                <InputText className="w-15rem" value={gardiansName} onChange={(e) => setGaurdiansName(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Relation</h4>
                                <InputText className="w-15rem" value={gardiansRelation} onChange={(e) => setgaurdiansRelation(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Email</h4>
                                <InputText className="w-15rem" value={gardiansEmail} onChange={(e) => setGaurdiansEmail(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Mobile No.</h4>
                                <InputText className="w-15rem" value={gardiansMobile} onChange={(e) => setGaurdiansMobile(e.target.value)}></InputText>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h4 className="m-0">Alternate Mobile No.</h4>
                                <InputText className="w-15rem" value={gardiansAltMobile} onChange={(e) => setGaurdiansAltMobile(e.target.value)}></InputText>
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