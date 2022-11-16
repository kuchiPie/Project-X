import './AdminTopHeader.css'

function AdminTopHeader(props){
    return (
        <div className='top-header'>
            <div className='line'></div>
            <div className='info'>
                <h2>{props.screen}</h2>
                <h5>Home/User Dashboard</h5>
            </div>
        </div>
    );
}

export default AdminTopHeader