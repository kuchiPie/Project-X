import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { logoutHandler } from '../reduxSlices/LoginSlice';
import {clearFaculty} from '../reduxSlices/FacultySlice';
import {clearOutpass} from '../reduxSlices/outpassSlice';
import {clearMapping} from '../reduxSlices/StudentFacultyMappingSlice';
import {clearStudent} from '../reduxSlices/studentSlice';

const WentWrongWidget = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
    }

    const noHandler=()=>{
        dispatch(props.noFunction());
    }

    const yesHandler=()=>{
        dispatch(logoutHandler());
        dispatch(clearFaculty());
        dispatch(clearOutpass());
        dispatch(clearMapping());
        dispatch(clearStudent());
        dispatch(props.yesFunction());
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={noHandler} className="p-button-text" />
                <Button to={'/'} label="Yes" icon="pi pi-check" onClick={yesHandler} autoFocus />
            </div>
        );
    }

    return (
        <div className="dialog-demo">
            <div className="card">
                <Dialog header="Header" visible={props.hasFailed} style={{ width: '50vw' }} footer={renderFooter()} onHide={noHandler}>
                    <p>We Found Something wrong in your system, do you wish to logout and try logging in again? </p>
                </Dialog>
            </div>
        </div>
    )
}
export default WentWrongWidget