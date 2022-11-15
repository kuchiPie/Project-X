import {useState} from 'react'
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import { Menu } from 'primereact/menu';

const CustomSidebar = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const items = [
        {
            label:'Quick Links',
            items:[
                {
                    label:'Dashboard',
                    url:'',
                    style:{
                        fontSize:'0.85em'
                    }
                },
                {
                    label:'Manage Sessions',
                    url:'',
                    style:{
                        fontSize:'0.85em'
                    },
                },
                {
                    label:'Manage Faculty',
                    url:'',
                    style:{
                        fontSize:'0.85em'
                    },
                },
                {
                    label:'Manage Students',
                    url:'',
                    style:{
                        fontSize:'0.85em'
                    }
                }
            ]
        },
        {
            label:'Module Designers',
            style:{
                marginTop:'20px',
            },
            items:[
                {
                    label:'Aman Gupta',
                    style:{
                        fontSize:'0.85em'
                    },
                },
                {
                    label:'Omkar Gowda',
                    style:{
                        fontSize:'0.85em'
                    },
                },
                {
                    label:'Chirag Mittal',
                    style:{
                        fontSize:'0.85em'
                    },


                },
                {
                    label:'Shreyas Bulbule',
                    style:{
                        fontSize:'0.85em'
                    },
                }
            ]
        },
        {
            label:'Support',
            style:{
                marginTop:'20px',
            },
            items:[
                {
                    label:'ProjectX@iiitdwd.ac.in',
                    style:{
                        fontSize:'0.85rem'
                    }
                }
            ]
        }


    ]
  return (


    <>
        <div>
            <Sidebar
            
              visible={visibleLeft}
              maskStyle={{ width: "0" }}
              style={{
                borderRadius:'10px',
                color: "white",
                width: "15em",
                height: "75vh",
                position: "absolute",
                bottom: "0",
              }}
              className="shadow-2"
              onHide={() => setVisibleLeft(false)}
              showCloseIcon={false}
            >
              <div>
                <Menu 
                    model={items}
                    className="p-3 shadow-2"
                />
              </div>
            </Sidebar>
          </div>
          <div className="flex">
            {
              visibleLeft ? (
            <Button
              label="Hide Menu"
              icon="pi pi-arrow-left"
              style={{
                  backgroundColor:'white',
                  border:'0px',
                  color:'black',
                  marginTop:'15px',
              }}
              onClick={() => setVisibleLeft(false)}
              
            />   
              ):(
                  <Button
                  label="Show Menu"
                  icon="pi pi-arrow-right"
                  style={{
                      backgroundColor:'white',
                      border:'0px',
                      color:'black',
                      marginTop:'15px',
                  }}
                  onClick={() => setVisibleLeft(true)}
                  
                />
              )
            }
          </div>
    </>
  )
}

export default CustomSidebar