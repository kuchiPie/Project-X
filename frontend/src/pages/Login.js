import React, { useState, useRef} from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { SelectButton } from 'primereact/selectbutton';
import { passReset } from '../constants/passwordResetActions';

import Form from "react-validation/build/form";
import { loginUser } from '../reduxSlices/LoginSlice';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
    const toast = useRef(null);

    const form = useRef();
    const forgotPWForm = useRef();
    const [showPassword,setShowPassword] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [FPvisible, setFPVisible] = useState(false)
    

    const { isLoggedIn, status, loggedUser, userType, token, error} = useSelector(state => state.login);
    const [selectedUser, setSelectedUser] = useState({
        label:'' || `${userType}`
    });
    const users = [
        {
            label:'Admin'
        },
        {
            label:'Faculty'
        },
        {
            label:'Student'
        }
    ]

    const justifyTemplate = (option) =>{
        return <p>{option.label}</p>
    }


    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    // const showError = () => {
    //     if(error === 'Email is not registered'){
    //         toast.current.show({severity:'error', summary: 'Select Correct Role', detail:'Email is not registored', life: 3000});
    //     }
    //     if(error === 'Password incorrect'){
    //         toast.current.show({severity:'error', summary: 'Incorrect Password', detail:'Re-enter Password', life: 3000});
    //     }
        
    // }

    const forgotPasswordVisibleDialog = () => {
        setFPVisible(true);
    }
    const hideForgotPasswordDialog = () => {
        setFPVisible(false);
    }

    const handleFPSubmit = (e) => {
        e.preventDefault();
        const body = {
            username: `${username}`,
            userType: `${selectedUser.label}`
        }
        dispatch(passReset(body));
        setFPVisible(false);
        toast.current.show({severity:'success', summary: 'Password Reset', detail:'Successful', life: 3000})
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({email: username, password, selectedUser}))
        if(status === 'failed') {
            switch(error) {
                case 'Email is not registered':
                    toast.current.show({severity:'error', summary: 'Select Correct Role', detail:'Email is not registored', life: 3000});
                    break;
                
                case 'Password incorrect':
                    toast.current.show({severity:'error', summary: 'Incorrect Password', detail:'Re-enter Password', life: 3000});
                    break;
                
                default: toast.current.show({severity:'success', summary: 'Login Successful', detail:'Welcome', life: 3000})
            }
        }
    };

    if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('userType', JSON.stringify(selectedUser.label));
        
        if(selectedUser.label === 'Admin')
            return <Navigate to={`/admin/${loggedUser._id}`} />;
        if(selectedUser.label === 'Faculty')
            return <Navigate to={`/faculty/${loggedUser._id}`} />;
        if(selectedUser.label === 'Student')
            return <Navigate to={`/student/${loggedUser._id}`} />;
    }
    

    return (
        <>
        <Toast ref={toast} />
            <div className="flex justify-content-end ">
                <img className="h-screen w-8" src="/images/iiit-dharwad.jpg" alt="college" />
                <div className="w-9 flex align-content-center flex-wrap">
                    <Card className='m-5 w-full shadow-6'>
                        <div className="flex justify-content-between my-3 ">
                            <img src="/images/logon.png" alt="college-logo" width={250} />
                            <h1 className='font-bold'> Project X</h1>
                        </div>
                        <hr></hr>
                        <div className="mb-5">
                            <h2 className="m-0 font-bold">Welcome,</h2>
                            <h3 className="mt-1">Please Sign in with Insititute ID</h3>
                        </div>
                        <Form onSubmit={handleLogin} ref={form}>
                        <div className="field">
                            <span className="p-float-label">
                                <h4>Insititute ID</h4>
                                <InputText required={required} value={username} onChange={onChangeUsername} className="w-full" id="username" type="text" />
                            </span>
                        </div>
                        <div className="field">
                        <h4>Password</h4>
                            <span className="p-float-label p-input-icon-right">
                            { showPassword ? (<i onClick = {()=>setShowPassword(!showPassword)} className='pi pi-eye'></i>):(<i onClick = {()=>setShowPassword(!showPassword)}  className='pi pi-eye-slash'></i>)}
                                <InputText required={required} value={password} onChange={onChangePassword} className="w-30rem" id="password" type= {showPassword ? "text":"password"} />      
                            </span>
                        </div>
                        <SelectButton className ="w-full"  value={selectedUser} options={users} onChange={(e) => setSelectedUser(e.value)} itemTemplate={justifyTemplate}></SelectButton>     
                        {status === 'loading' && (
                            <span className="spinner-border spinner-border-sm"><ProgressSpinner /></span>
                        )}
                        <Button className="my-4 w-full" label="Login"></Button>
                        </Form>
                        <Button label="Forgot Password?" className="p-button-link" onClick={forgotPasswordVisibleDialog} />                      
                    </Card>
                    </div>
            </div>
            { FPvisible && (
                <Dialog
                    visible={FPvisible}
                    style={{ width: "600px" }}
                    header="Reset Password"
                    modal
                    onHide={hideForgotPasswordDialog}
                    className="p-fluid"
                    position='right'
                    closeOnEscape
                >
                    <div className="field">
                    <Form onSubmit={handleFPSubmit} ref={forgotPWForm}>
                        <InputText className='mt-1 w-full' value={username} onChange={(e)=>setUsername(e.target.value) } required />
                        <SelectButton className ="w-full"  value={selectedUser} options={users} onChange={(e) => setSelectedUser(e.value)} itemTemplate={justifyTemplate}></SelectButton>
                        <Button label="Send E-mail to Reset Password" className="my-4 w-full"/>
                    </Form>
                    </div>
            </Dialog>
            )}
                 
        </>

    )
}


export default React.memo(Login);

/* {(status === 'failed') && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {showError()}
                            </div>
                        </div>
                        )} */