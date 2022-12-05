import React,{useState} from 'react'
import { Button } from "primereact/button";
import {Sidebar} from 'primereact/sidebar'

import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const FacultyNavBar = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const id = useSelector(state => state.login.loggedUser._id);
    const MenuItems = [
      {
        title:"Dashboard",
        path:`/faculty/${id}`
      },
      {
        title:"My Profile",
        path:`/faculty/${id}/profile`
      },
      {
        title:"All Mentees",
        path:`/faculty/${id}/all_mentees`
      },
      {
        title:"All Outpass Requests",
        path:`/faculty/${id}/all_outpass_requests`

      }
    ]
  return (
    <div className='flex py-2 px-2'>
    <Button icon="pi pi-bars" onClick={() => setVisibleLeft(true)} className="m-2 p-button-text p-button-plain" />
    <Sidebar visible={visibleLeft} onHide={()=>setVisibleLeft(false)} maskStyle={{position:"absolute",top:'5rem'}}>
    {MenuItems.map((item,index)=>{
      return (
        <div key={index} className="py-3 text-xl font-semibold" style={{width:"100%",height:"5rem"}}>
          <Link to={item.path} className="no-underline text-black-500" onClick={()=>setVisibleLeft(false)}>{item.title}</Link>
        </div>
      );
    })}
    <h2>Support</h2>
    <p>ProjectX@iiitdwd.ac.in</p>

    </Sidebar>
    
           
    </div>
  )
}

export default FacultyNavBar