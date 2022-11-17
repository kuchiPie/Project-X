import React, { useState, useRef} from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { SelectButton } from 'primereact/selectbutton';



import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import { loginUser, setUserType } from '../reduxSlices/LoginSlice';

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
    // let navigate = useNavigate();

    const form = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedUser, setSelectedUser] = useState({
        label:'Student'
    });

    const { isLoggedIn, status, loggedUser, userType} = useSelector(state => state.login);
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
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await dispatch(loginUser({email: username, password, selectedUser}))
        dispatch(setUserType({userType: selectedUser.label}))
    };

    if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        localStorage.setItem('token', JSON.stringify(loggedUser.token));
        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('userType', JSON.stringify(userType));
        
        if(userType === 'Admin')
            return <Navigate to="/admin" />;
        if(userType === 'Faculty')
            return <Navigate to="/faculty" />;
        if(userType === 'Student')
            return <Navigate to="/student" />;
    }

    return (
        <>
            <div className="flex justify-content-end ">
                <img className="h-screen w-8" src="/images/iiit-dharwad.jpg" alt="college" />
                <div className="w-9 flex align-content-center flex-wrap">
                    <Card className='m-5 w-full'>
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
                            <span className="p-float-label w-full">
                                <h4>Password</h4>
                                <Password required={required} value={password} onChange={onChangePassword} feedback={false} id='password'/>

                            </span>
                        </div>
                        <SelectButton value={selectedUser} options={users} onChange={(e) => setSelectedUser(e.value)} itemTemplate={justifyTemplate}></SelectButton>               
                        {status === 'loading' && (
                            <span className="spinner-border spinner-border-sm"><div>Hello</div></span>
                        )}
                        <Button className="my-4 w-full" label="Login"></Button>
                        </Form>
                        {status === 'failed' && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                Something went wrong !!!!!
                            </div>
                        </div>
                        )}
                    </Card>
                    </div>
            </div></>

    )
}


export default React.memo(Login);