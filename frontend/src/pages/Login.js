import React, { useState, useRef} from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from '../utils/auth';

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
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
        dispatch(login(username, password))
            // .then(() => {
            // navigate("/student");
            // window.location.reload();
            // })
            // .catch(() => {
            // setLoading(false);
            // });
        } else {
        setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/admin" />;
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
                        {/* <div className="flex align-items-center">
                            <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setChecked(e.checked)} checked={checked} />
                            <label htmlFor="rememberme1">Remember me</label>
                        </div> */}
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />  
                        <Button className="my-4 w-full" label="Login"></Button>
                        </Form>
                        {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                        )}
                    </Card>
                    </div>
            </div></>

    )
}


export default React.memo(Login);