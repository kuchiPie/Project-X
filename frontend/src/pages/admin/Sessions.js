import React from "react";
import { useState } from "react";

import { Dropdown } from "primereact/dropdown";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useOutletContext } from "react-router-dom";

const Sessions = () => {
  const visible = useOutletContext()
  const [selectedSession, setSelectedSession] = useState(null);
  const [countCSE, setCountCSE] = useState(null);
  const [countDSAI, setCountDSAI] = useState(null);
  const [countECE, setCountECE] = useState(null);
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
  ];

  return (
    <>
      <div
        className="flex justify-content-evenly border-round-lg ml-2"
        
      >
        <div className="p-3 min-h-screen border-round-lg">
          <h1>View Sessions</h1>
          <DataTable>
            <Column field="Id" header="Id"></Column>
            <Column field="" header="Session Year"></Column>
            <Column field="" header="CSE(students)"></Column>
            <Column field="" header="DSAI(students)"></Column>
            <Column field="" header="ECE(students)"></Column>
          </DataTable>
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
              <label htmlFor="countECE" className="block">No. of students in DSAI</label>
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
          />
        </div>
      </div>
    </>
  );
};

export default Sessions;
