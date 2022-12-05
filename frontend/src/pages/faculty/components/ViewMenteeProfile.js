import React,{useState} from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'

const ViewMenteeProfile = ({rowData}) => {
  const emptyMentee = {
    name:'',
    profile_photo:'',
    institute_id:'',
    phone_no:'',
    branch:'',
    gender:'',
    hometown:'',
    address:'',
  }

  const [menteeProfile,setMenteeProfile] = useState(false)
  const [mentee,setMentee] = useState(emptyMentee)
  const showProfile = (rowData)=>{
    setMenteeProfile(true)
    setMentee(rowData)
  }
  return (
    <>
        <Button label="View Profile" className="mx-2" onClick={()=>showProfile(rowData)}/>
        <Dialog visible={menteeProfile} onHide={()=>setMenteeProfile(false)} blockScroll={true}>
        <Card className="shadow-6 px-7">
            <div className="flex justify-content-between ">
              <h1>{mentee.name}</h1>
              <h1>{mentee.institute_id}</h1>
              {/* <div className="flex justify-content-evenly">
              <h2>Name:</h2>
              <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">{outpass.name}</p>
            </div>
            <div className="flex justify-content-evenly">
              <h2>Institute Id:</h2>
              <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">{outpass.institute_id}</p>
            </div> */}
            </div>
            <Divider />
            <div className=""></div>
            <div className="flex justify-content-between">
              <div className="flex justify-content-evenly">
                <h2>
                  Branch<span className="px-1"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">
                  {mentee.branch}
                </p>
              </div>
              <div className="flex justify-content-evenly mx-3">
                <h2>
                  Semester<span className="px-1"></span>:
                </h2>
                <p className="w-7rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 mx-3 ">
                  {mentee.semester}
                </p>
              </div>
              <div className="flex justify-content-evenly">
                <h2>
                  Gender<span className="px-3"></span>:
                </h2>
                <p className="w-14rem text-xl border-bottom-2 border-x-none border-top-none text-center pb-2 ml-2 ">
                  {mentee.gender}
                </p>
              </div>
            </div>
            <div className="flex justify-content-between">
              
              
            </div>
            
            
            
          </Card>
        

        </Dialog>

    </>
  )
}

export default ViewMenteeProfile