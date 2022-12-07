import React from "react";
import { Card } from "primereact/card";

const noCurrent = () => {
    return <>
        <Card className="m-3 p-0 border-2 border-gray-800 text-3xl font-bold flex justify-content-center ">
            <div className="justify-content-center">No Current Outpass!!!</div>
        </Card>
    </>
}

export default noCurrent