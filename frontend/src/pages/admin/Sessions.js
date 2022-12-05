import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const Sessions = () => {
  const visible = useOutletContext()
  const [selectedSession, setSelectedSession] = useState(null);
  const [countCSE, setCountCSE] = useState(null);
  const [countDSAI, setCountDSAI] = useState(null);
  const [countECE, setCountECE] = useState(null);
  const [fetchedsessions, setfetchedsessions] = useState([])

  useEffect(() => {
    async function fetchdata() {
      try{
        const response = await axios.get("http://localhost:5000/api/getSessions")
        setfetchedsessions(response.data)
      } catch(e) {
        console.log(e)
      }
    }
    fetchdata()
  }, []);

  const sessions = [
    {
      label: "2019-2023",
    },
    {
      label: "2020-2024",
    },
    {
      label: "2021-2025",
    },
    {
      label: "2022-2026",
    },
    {
      label: "2023-2027",
    },
  ];

  const token = useSelector(state => state.login.token)
  
  const createSession = async () => {
    const mp = {
      bds: countDSAI,
      bcs: countCSE,
      bec: countECE
    }
    const body = {
      year: parseInt(selectedSession.label.substring(2,4)),
      branches: mp
    }
    try{
      const response = await axios.post("http://localhost:5000/api/createStudentProfiles", body, {
        headers: {Authorization: "Bearer " + token}
      });
      const sessionsCopy = [...fetchedsessions]
      sessionsCopy.push(response.data)
      setfetchedsessions(sessionsCopy)
    } catch(e) {
      console.log(e)
    }
  } 

  return (
    <>
      <div
        className="flex justify-content-evenly border-round-lg ml-2"
        
      >
        <div className="p-3 min-h-screen border-round-lg">
          <h1>View Sessions</h1>
          {fetchedsessions !== [] ? 
          <DataTable value = {fetchedsessions}>
            <Column field="id" header="Id"></Column>
            <Column field="year" header="Session Year"></Column>
            <Column field="cse" header="CSE(students)"></Column>
            <Column field="dsai" header="DSAI(students)"></Column>
            <Column field="ece" header="ECE(students)"></Column>
          </DataTable> : <div>Fetching Data</div>}
        </div>


        <div className="surface-100 border-round-3xl mr-3 py-3" style={{ paddingLeft: visible?'2em':'4em',paddingRight: visible?'2em':'4em',height:'25em'}}>
          <h1>Add Session</h1>
          <Dropdown
            id="dropdown"
            value={selectedSession}
            options={sessions}
            onChange={(e) => setSelectedSession(e.value)}
            placeholder="Select a Session"
            style={{width:'10em'}}
          />
          <div className="flex justify-content-evenly mt-5">
            <div className="field text-center">
              <label htmlFor="countCSE" className="block">No. of students in CSE</label>
              <InputText
                style={{width: '10em'}}
                id="countCSE"
                value={countCSE}
                onChange={(e) => setCountCSE(e.target.value)}
              />
            </div>
            <div className="field ml-3 text-center">
              <label htmlFor="countDSAI" className="block">No. of students in DSAI</label>
              <InputText
                style={{width: '10em'}}
                id="countDSAI"
                value={countDSAI}
                onChange={(e) => setCountDSAI(e.target.value)}
              />
            </div>
            <div className="field ml-3 text-center">
              <label htmlFor="countECE" className="block">No. of students in ECE</label>
              <InputText
                style={{width: '10em'}}
                id="countECE"
                value={countECE}
                onChange={(e) => setCountECE(e.target.value)}
              />
            </div>
          </div>
          <Button
            label="Add Session"
            className="bg-black-alpha-60 mt-3"
            style={{width:'10em'}}
            onClick={createSession}
          />
        </div>
      </div>
    </>
  );
};

export default Sessions;
