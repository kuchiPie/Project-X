import React, { useEffect, useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import PersonalTab from './PersonalTab';
import EditProfile from './EditProfile';
import AcademicTab from './AcademicTab';
import OtherTab from './OtherTab';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentByID } from '../../../reduxSlices/studentSlice';


function Profile() {
    const dispatch = useDispatch()

    const { loggedUser } = useSelector(state=> state.login)

    useEffect(()=>{
        dispatch(getStudentByID(loggedUser._id))
    }, [])
 

    const [displayEditProfile, setDisplayEditProfile] = useState(false)
    const branch = loggedUser.branch
    

    return (
        <>

            {/* Student Page */}
            <div className="grid w-full m-1">
                <div className="col-12 lg:col-3 xl:col-3">

                    {/* <h1 className="my-1">Welcome, {loggedUser.name}</h1> */}

                    {/* Profile Card */}
                    <Card className=" flex justify-content-center border-2 border-gray-800">
                        <div className="flex flex-column">
                            <Image src="/images/shin.jpg" alt="profile-photo" width="250rem" preview />
                            <h4 className="flex justify-content-center my-1">{loggedUser.name  || '---'}</h4>
                            {/* <h5 className="flex justify-content-center my-1">{loggedUser.degree  || 'Degree Type'}</h5> */}

                            <h5 className="flex justify-content-center my-1">{loggedUser.branch==="bds"?"DSAI":loggedUser.branch==='bec'?"ECE":"CSE"  || 'branch'}</h5>
                            <Button type="button" label="Edit Profile" icon="pi pi-pencil" onClick={() => setDisplayEditProfile(true)} />
                            {
                                displayEditProfile && (
                                    <EditProfile setDisplayEditProfile={setDisplayEditProfile} student={loggedUser} displayEditProfile/>
                                )
                            }
                        </div>
                    </Card>
                </div>
                <div className="col-12 lg:col-9 xl:col-8">

                    {/* TabView Card */}
                    {/* <Card className=""> */}
                        <TabView className='font-bold py-3 text-xl border-2 border-gray-800 border-round-lg'>

                            {/* Personal Info Tab */}
                            <TabPanel header="Personal" width="100%">
                                <PersonalTab student={loggedUser}/>
                            </TabPanel>

                            {/* Academic Info Tab */}
                            <TabPanel header="Academic">
                                <AcademicTab student = {loggedUser}/>
                            </TabPanel>

                            {/* Other Info Tab */}
                            <TabPanel header="Other">
                                <OtherTab student = {loggedUser}/>
                            </TabPanel>

                        </TabView>
                    {/* </Card> */}
                </div>
            </div>

        </>
    );
}

export default Profile;