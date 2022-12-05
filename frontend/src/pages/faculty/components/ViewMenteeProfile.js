import React,{useState} from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'

const ViewMenteeProfile = ({rowData}) => {
  const emptyMentee = {
    name:'',
    institute_id:'',
    phone_no:'',
    branch:'',
    hometown:'',
    address:'',
  }

  const [menteeProfile,setMenteeProfile] = useState(false)
  const [mentee,setMentee] = useState(emptyMentee)
  const [submitted,setSubmitted] = useState(false)
  const showProfile = (rowData)=>{
    setMenteeProfile(true)
    setMentee(rowData)
  }
  return (
    <>
        <Button label="View Profile" className="mx-2" onClick={()=>showProfile(rowData)}/>
        <Dialog visible={menteeProfile} onHide={()=>setMenteeProfile(false)}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <InputText 
            id="name"
            value={mentee.name}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !mentee.name})}
          />
        </div>
        <div className="field">
          <label htmlFor="institute_id">Institute Mail Id</label>
          <InputText 
            id="institute_id"
            value={mentee.institute_id}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !mentee.institute_id})}
          />
        </div>
        <div className="field">
          <label htmlFor="institute_id">Branch</label>
          <InputText 
            id="branch"
            value={mentee.branch}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !mentee.branch})}
          />
        </div>
        <div className="field">
          <label htmlFor="institute_id">Phone No.</label>
          <InputText 
            id="phone_no"
            value={mentee.phone_no}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !mentee.phone_no})}
          />
        </div>
        <div className="field">
          <label htmlFor="institute_id">Hometown</label>
          <InputText 
            id=""
            value={mentee.hometown}
            required
            autoFocus
            className={classNames({"p-invalid":submitted && !mentee.hometown})}
          />
        </div>
        

        </Dialog>

    </>
  )
}

export default ViewMenteeProfile