import React from 'react';
import { Menubar } from 'primereact/menubar';
import './Navbar.css'

const Navbar = () => {
    const items=[
        {
            label:'About Project X',
        },
        {
            label:'Terms And Service',
            url:''
        },
    ]

    const end = <img alt="iiitdwd-logo" src="images/iiitdwd logo.png" height="60" className="mr-2"></img>;

    return (
        <div>
            <div className="card">
                <Menubar model={items} end={end} style={{'backgroundColor':'#262626','border':'0','borderRadius':'0'}} />
            </div>
        </div>
    );
}
                 
export default Navbar