import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';

const Login = () => {
    const [checked, setChecked] = useState(false);

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
                        <div className="field">
                            <span className="p-float-label">
                                <h4>Insititute ID</h4>
                                <InputText className="w-full" id="username" type="text" />
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label w-full">
                                <h4>Password</h4>
                                <InputText className="w-full" id="password" type="text" />
                            </span>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setChecked(e.checked)} checked={checked} />
                            <label htmlFor="rememberme1">Remember me</label>
                        </div>
                        <Button className="my-4 w-full" label="Login"></Button>
                    </Card>
                    </div>
            </div></>

    )
}


export default React.memo(Login);