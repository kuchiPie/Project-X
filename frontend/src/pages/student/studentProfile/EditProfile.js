import React, { useState } from 'react'
import { Divider } from 'primereact/divider';
// import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Form from "react-validation/build/form";
import { useDispatch } from 'react-redux';
import { editStudentDetails, getStudentByID } from '../../../reduxSlices/studentSlice';
import { Dialog } from 'primereact/dialog';

function EditProfile({student,setDisplayEditProfile,displayEditProfile}) {
    const dispatch = useDispatch()   

  

    const [visible, setVisible] = useState(displayEditProfile);
    const [fatherName, setFatherName] = useState(student.fatherName);
    const [motherName, setMotherName] = useState(student.motherName);
    const [dateOfBirth, setDateOfBirth] = useState(student.dateOfBirth);
    const [email, setEmail] = useState(student.email);
    const [nationality, setNationality] = useState(student.nationality);
    const [altEmail, setAltEmail] = useState(student.altEmail);
    const [mobileNo, setMobileNo] = useState(student.mobileNo);
    const [name, setname] = useState(student.name);
    const [gender, setGender] = useState(student.gender);
    const [bloodGroup, setBloodGroup] = useState(student.bloodGroup);
    const [category, setCategory] = useState(student.category);
    const [motherTongue, setMotherTongue] = useState(student.motherTongue);
    const [gardiansName, setGaurdiansName] = useState(student.gardiansName);
    const [gardiansEmail, setGaurdiansEmail] = useState(student.gaudiansEmail);
    const [gardiansRelation, setgaurdiansRelation] = useState(student.gardiansRelation);
    const [gardiansMobile, setGaurdiansMobile] = useState(student.gardiansMobile);
    const [gardiansAltMobile, setGaurdiansAltMobile] = useState(student.gardiansAltMobile);


    const handleSubmit = (e) => {
        e.preventDefault();
        const parameters = { 
            body : 
            {
                fatherName : `${fatherName}`,
                motherName : `${motherName}`,
                dateOfBirth : `${dateOfBirth}`,
                email : `${email}`,
                nationality : `${nationality}`,
                altEmail : `${altEmail}`,
                mobileNo : `${mobileNo}`,
                name : `${name}`,
                gender : `${gender}`,
                bloodGroup : `${bloodGroup}`,
                category : `${category}`,
                motherTongue : `${motherTongue}`,
                gardiansEmail:`${gardiansEmail}`,
                gardiansRelation:`${gardiansRelation}`,
                gardiansMobile:`${gardiansMobile}`,
                gardiansAltMobile:`${gardiansAltMobile}`,
                

            },
            id: `${student._id}`
        }
        dispatch(editStudentDetails(parameters));
        dispatch(getStudentByID(student._id));
        setVisible(false);
        setDisplayEditProfile(false);
    }

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

    const onHide = ()=>{
        setVisible(false);
        setDisplayEditProfile(false);
    }

    return (
        <div>
            <Dialog
            visible={visible}
            onHide={onHide}
            style={{ width: "80rem" }}
            header={`Edit ${student.rollno} Details`}
            modal
            className="p-fluid"
            closeOnEscape
            blockScroll
            >
                <Form onSubmit = {handleSubmit}>
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
                                <Dropdown className="w-15rem" optionLabel="gender" optionValue='gender' placeHolder={gender} value={gender} options={genders} onChange={(e) => setGender(e.value)} />
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
                                <Dropdown className="w-15rem" optionLabel="cat" optionValue='cat' placeHolder={category} value={category} options={cats} onChange={(e) => setCategory(e.value)} />
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
                <Button type="submit" label="Save" icon="pi pi-check" className="p-button-secondary"/>
            </Form>
            </Dialog>
        </div>
        );
}

export default EditProfile;