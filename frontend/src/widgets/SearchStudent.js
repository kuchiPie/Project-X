import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const SearchStudent = () => {
  const branches = [
    { label: "DSAI", value: "DSAI" },
    { label: "CSE", value: "CSE" },
    { label: "ECE", value: "ECE" }
  ];

  const batches = [
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" }
  ];

  const [branch, setBranch] = useState("");
  const [batch, setBatch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onBranchChangeHandler = (event) => {
    setBranch(event.target.value);
  };

  const onBatchChangeHandler = (event) => {
    setBatch(event.target.value);
  };

  const onKeywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const submitHandler = () => {
    console.log(keyword);
    console.log(branch);
    console.log(batch);
  };

  return (
    <>
      <div className="card  mb-5">
        <div className="grid p-fluid">
          <div className="col-12 lg:col-12">
            <div className="p-inputgroup mb-3">
              <InputText
                onChange={onKeywordChangeHandler}
                placeholder="Enter a name or roll number (Optional)"
              />
            </div>

            <div className="p-inputgroup mb-3">
              <Dropdown
                onChange={onBranchChangeHandler}
                options={branches}
                value={branch}
                placeholder="Select a branch (Optional)"
              />
            </div>

            <div className="p-inputgroup mb-3">
              <Dropdown
                value={batch}
                options={batches}
                onChange={onBatchChangeHandler}
                placeholder="Select a batch (Optional)"
              />
            </div>

            <Button
              onClick={submitHandler}
              label="Search"
              aria-label="Submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchStudent;
