import React, {useState} from 'react';
import './Navbar2.css'
import { Button } from "primereact/button";
import {Sidebar} from 'primereact/sidebar'

import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Navbar2 = () => {
    const [visibleLeft, setVisibleLeft] = useState(true);
    const id = useSelector(state => state.login.loggedUser._id);
    const MenuItems = [
      {
        title:"Dashboard",
        path:`/admin/${id}/`
      },
      {
        title:"Manage Sessions",
        path:`/admin/${id}/manage_sessions`
      },
      {
        title:"Manage Students",
        path:`/admin/${id}/manage_students`
      },
      {
        title:"Manage Faculty",
        path:`/admin/${id}/manage_faculty`
      }
    ]

    return (
        <div className='flex py-2 px-2'>
        <Button icon="pi pi-bars" onClick={() => setVisibleLeft(true)} className="m-2 p-button-text p-button-plain" />
        <Sidebar visible={visibleLeft} onHide={()=>setVisibleLeft(false)} maskStyle={{position:"absolute",top:'6.6vh'}}>
        {MenuItems.map((item,index)=>{
          return (
            <div key={index} className="py-3 text-xl font-semibold" style={{width:"100%",height:"5rem"}}>
              <Link to={item.path} className="no-underline text-black-500">{item.title}</Link>
            </div>
          );
        })}
        <h2>Support</h2>
        <p>ProjectX@iiitdwd.ac.in</p>

        </Sidebar>
        
               
        </div>
        
    );
}
                 
export default Navbar2;