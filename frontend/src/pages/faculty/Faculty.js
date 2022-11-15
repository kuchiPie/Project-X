import React, { useState, useEffect } from 'react';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import { useDispatch, useSelector } from 'react-redux';
import { getFacultyList } from '../../actions/facultyActions.js';

const Faculty = () => {
    const [faculty, setFaculty] = useState();
    const [keyword, setKeyword] = useState('');
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);

    const dispatch = useDispatch();
    const getfaculty = useSelector(state=> state.getfaculty)
    console.log(getfaculty);



    useEffect((keyword, limit, skip) => {
        const res = dispatch(getFacultyList(keyword, limit, skip));
        setFaculty(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword, limit, skip]);


    return (
        <div>
            <div className="card">
                <h5>Left Icon</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search" />
                    <InputNumber value={limit} onChange={(e) => setLimit(e.target.value)} placeholder="limit" />
                    <InputNumber value={skip} onChange={(e) => setSkip(e.target.value)} placeholder="Skip" />
                    <p>[{faculty}]</p>
                </span>
            </div>
        </div>
    );
}

export default Faculty;
