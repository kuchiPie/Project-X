import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function OutpassHistory() {
    
    const [displayHistory, setDisplayHistory] = useState(false);

    return (
        <>
            <Button type="button" label="Outpass History" icon="pi pi-folder-open" onClick={() => setDisplayHistory(true)} />
            <Dialog header="History" visible={displayHistory} style={{ width: '80vw' }} modal onHide={() => setDisplayHistory(false)}>
                <Card header="No History" className="h-full mx-5 border-2 border-gray-800 surface-100">
                </Card>
            </Dialog>
        </>
    );
}

export default OutpassHistory;