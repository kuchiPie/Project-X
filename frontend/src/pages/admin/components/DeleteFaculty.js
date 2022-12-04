import React from "react";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteFacultyServer } from "../../../reduxSlices/FacultySlice";

const DeleteFaculty = ({ rowData }) => {
  const token = useSelector(state=>state.login);
  let emptyFaculty = {
    name: "",
    institute_id: "",
    department: "",
    mentees: [],
  };

  const dispatch = useDispatch();
  const [deleteFacultyDialog, setDeleteFacultyDialog] = useState(false);
  const [faculty, setFaculty] = useState(emptyFaculty);

  const confirmFacultyDelete = (rowData) => {
    setDeleteFacultyDialog(true);
    setFaculty(rowData);
  };
  const hideDeleteFacultyDialog = () => {
    setDeleteFacultyDialog(false);
  };

  const ondeleteFaculty = async () => {
    setDeleteFacultyDialog(false);
    await dispatch(deleteFacultyServer({faculty:faculty,token:token}));
  };

  const deleteFacultyDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteFacultyDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={ondeleteFaculty}
      />
    </React.Fragment>
  );

  return (
    <>
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger"
        onClick={() => confirmFacultyDelete(rowData)}
      />
      <Dialog
        visible={deleteFacultyDialog}
        style={{ width: "450px" }}
        header="Confirm"
        modal
        footer={deleteFacultyDialogFooter}
        onHide={hideDeleteFacultyDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {faculty && (
            <span>
              Are you sure you want to delete <b>{faculty.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default DeleteFaculty;
