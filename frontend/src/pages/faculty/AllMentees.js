import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ViewMenteeProfile from "./components/ViewMenteeProfile";
import ViewOutpassHistory from "./components/ViewOutpassHistory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStudents, getMentees } from '../../reduxSlices/studentSlice';


const AllMentees = () => {
  const {mentees} = useSelector(state => state.student)

  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  // const mentees = [
  //   {
  //     name: "Aman Gupta",
  //     institute_id: "20bds024@iiitdwd.ac.in",
  //     phone_no: "9036986178",
  //     hometown: "Mumbai",
  //     gender:'Male',
  //     address:"Mumbai",
  //     semester:'5th',
  //     branch:'DSAI',
  //   },
  // ];

  const dispatch = useDispatch()
  const {loggedUser} = useSelector(state => state.login)
  // console.log(loggedUser.mentees,122)
  const localMentees=[];
  mentees.forEach(mentee=>{localMentees.push({'name':mentee.name?mentee.name:"Some Student",'institute_id':mentee.rollno,'phone_no':mentee.mobileNo?mentee.mobileNo:"No Data", 'branch':mentee.branch==="bec"? "ECE": mentee.branch==="bcs"?"CSE":"DSAI", 'gender':mentee.gender?mentee.gender:"No Data", 'email':mentee.email, '_id':mentee._id})})


  const actionBodyTemplate = (rowData)=> {
    return (
        <>
          <ViewMenteeProfile rowData={rowData}/>
          <ViewOutpassHistory rowData={rowData}/>
        </>
      );
  }
  // componentDidMount(){
  //   dispatch(getMentees(loggedUser._id))
  // }
  useEffect(() => {
    dispatch(getMentees(loggedUser._id))
  }, [])
  
  return (
    <>
      <div className="px-5">
        <h1>All Mentees</h1>
        <DataTable
          value={localMentees}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column field="name" header="Name" style={{ minWidth: "8rem" }} />
          <Column
            field="institute_id"
            header="Institute Id"
            style={{ minWidth: "8rem" }}
          />
          <Column
            field="branch"
            header="Branch"
            style={{ minWidth: "8rem" }}
          />
          <Column
            field="phone_no"
            header="Phone No."
            style={{ minWidth: "8rem" }}
          />
          <Column
            body={actionBodyTemplate}
            export={false}
            header="Actions"
            style={{ minWidth: "4rem" }}
          />
        </DataTable>
      </div>
    </>
  );
};

export default AllMentees;
