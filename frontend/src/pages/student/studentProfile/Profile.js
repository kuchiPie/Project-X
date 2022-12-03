import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from "primereact/image";
import { Card } from 'primereact/card';
import PersonalTab from './PersonalTab';
import EditProfile from './EditProfile';
import AcademicTab from './AcademicTab';
import OtherTab from './OtherTab';


function Profile() {

    

    return (
        <>

            {/* Student Page */}
            <div className="grid w-full m-1">
                <div className="col-12 lg:col-3 xl:col-3">

                    <h1 className="my-1">Welcome, Shinchan</h1>

                    {/* Profile Card */}
                    <Card className=" flex justify-content-center border-2 border-gray-800">
                        <div className="flex flex-column">
                            <Image src="/images/shin.jpg" alt="profile-photo" width="250rem" preview />
                            <h4 className="flex justify-content-center my-1">Shinchan Nohara</h4>
                            <h5 className="flex justify-content-center my-1">B.Tech</h5>
                            <h5 className="flex justify-content-center my-1">DSAI</h5>
                            <EditProfile/>
                        </div>
                    </Card>
                </div>
                <div className="col-12 lg:col-9 xl:col-9">

                    {/* TabView Card */}
                    {/* <Card className=""> */}
                        <TabView className='font-bold py-3 text-xl border-2 border-gray-800 border-round-lg'>

                            {/* Personal Info Tab */}
                            <TabPanel header="Personal" width="100%">
                                <PersonalTab/>
                            </TabPanel>

                            {/* Academic Info Tab */}
                            <TabPanel header="Academic">
                                <AcademicTab/>
                            </TabPanel>

                            {/* Other Info Tab */}
                            <TabPanel header="Other">
                                <OtherTab/>
                            </TabPanel>

                        </TabView>
                    {/* </Card> */}
                </div>
            </div>

        </>
    );
}

export default Profile;