import React from 'react';
import { Menubar } from 'primereact/menubar';
import {Link} from 'react-router-dom';
import './Navbar2.css'

const Navbar2 = () => {

    const start = <h2>Project X</h2>;
    const end = <div style={{'display':'flex','flexDirection':'row','width':'50%'}}>
        <Link style={{'padding':'5%','fontSize':'1.5rem'}}>Notifications</Link>
        <Link style={{'padding':'5%','fontSize':'1.5rem'}}>Profile</Link>
    </div>;

    return (
        <div>
            <div className="card2">
                <Menubar start={start} end={end} />
            </div>
        </div>
    );
}
                 
export default Navbar2;