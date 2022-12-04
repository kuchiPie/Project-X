import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';


function OutpassHistory() {

    const [displayHistory, setDisplayHistory] = useState(false);
    const [dataviewValue, setDataviewValue] = useState(null);

    const data = {
        name : "affnv",
        description : "bfsdb",
        date : "43848",
        approvalStatus : "fojwv"
    }
    
    const dataviewListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
                    <div className="flex-1 text-center md:text-left">
                        <div className="font-bold text-2xl">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                    </div>
                    <div className="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                        <span className="text-2xl font-semibold mb-2 align-self-center md:align-self-end">${data.date}</span>
                        <Button label="View" className="mb-2"></Button>
                        <span>{data.approvalStatus}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Button type="button" label="Outpass History" icon="pi pi-folder-open" onClick={() => setDisplayHistory(true)} />
            <Dialog header="History" visible={displayHistory} style={{ width: '80vw' }} modal onHide={() => setDisplayHistory(false)}>
                {/* <Card className="h-full mx-5 border-2 border-gray-800 surface-100"> */}
                    <DataView value={dataviewValue} paginator rows={9} itemTemplate={dataviewListItem(data)}></DataView>
                {/* </Card> */}
            </Dialog>
        </>
    );
}

export default OutpassHistory;