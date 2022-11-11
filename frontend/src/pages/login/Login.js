import React, { useState } from 'react';
import { Image } from "primereact/image";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

const Login = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className="card flex justify-content-end ">
                <div className="card w-5 ">
                    <div className="p-fluid">
                        <div className="flex justify-content-between my-3 ">
                            <Image src="/images/logon.png" alt="college-logo" width={230} />
                            <h1 className='font-bold'> Project X</h1>
                        </div>
                        <hr></hr>
                        <div className="mb-5">
                            <h3 className="m-0 font-bold">Welcome,</h3>
                            <h5 className="mt-1">Please Sign in with Insititute ID</h5>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <h5>Insititute ID</h5>
                                <InputText id="username" type="text" />
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <h5>Password</h5>
                                <Password id="password" type="password" />
                            </span>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setChecked(e.checked)} checked={checked} />
                            <label htmlFor="rememberme1">Remember me</label>
                        </div>
                        <Button className="my-4" label="Login"></Button>
                    </div>
                </div>
            </div></>

    )
}


export default React.memo(Login);