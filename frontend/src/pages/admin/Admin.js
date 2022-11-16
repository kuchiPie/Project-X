import Navbar from "../../widgets/NavBar";
import Navbar2 from "../../widgets/Navbar2";
import AdminTopHeader from "./AdminTopHeader";
import ShowHodeTableBar from "./ShowHideTableBar";

function Admin(){
    return (
        <>
            <Navbar/>
            <Navbar2/>
            <hr style={{'width':'100%','margin':'0','height':'2px','border':'none','backgroundColor':'black'}}></hr>
            <AdminTopHeader screen='Admin Dashboard'/>
            <hr style={{'width':'100%','margin':'0','height':'1px','border':'none','backgroundColor':'black','marginTop':'1%'}}></hr>
            <ShowHodeTableBar/>
        </>
    );
}

export default Admin;