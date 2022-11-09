import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const Navbar = () => {
    const items=[
        {
            label:'About Project X'
        },
        {
            label:'Terms And Service',
            url:''
        },
    ]

    const end = <img alt="iiitdwd-logo" src="https://iiitdwd.ac.in/img/logon.png" height="60" className="mr-2"></img>;

    return (
        <div>
            <div className="card">
                <Menubar model={items} end={end} />
            </div>
        </div>
    );
}
                 
export default Navbar