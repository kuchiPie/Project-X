import './ShowHideTableBar.css'
// import {PrimeIcons} from 'primeicons/api';

function ShowHodeTableBar(){
    return (
        <div className='showHideBar'>
            <div>
                <i className="pi pi-arrow-circle-right"></i>
                <h5>Show Table</h5>
            </div>
            <div>
                <i className="pi pi-arrow-circle-left"></i>
                <h5>Show Table</h5>
            </div>
        </div>
    );
}

export default ShowHodeTableBar