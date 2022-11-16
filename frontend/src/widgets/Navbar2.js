import React from 'react';
import './Navbar2.css'

const Navbar2 = () => {


    return (
        <div className='flex h-6rem shadow-2 py-2 px-5'>
            <span className='my-2 border-solid h-2'></span>
            <div className='ml-2'>
                <h1 className='m-0 mt-2'>Dashboard</h1>
                <p className='m-0' style={{'textDecoration':'underline'}}>Home/Dashboard</p>
            </div>
            
        </div>
    );
}
                 
export default Navbar2;