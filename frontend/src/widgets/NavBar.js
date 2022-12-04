import React from "react";
import { Menubar } from "primereact/menubar";
import "./Navbar.css";
import { Link ,useNavigate} from "react-router-dom";
import 'primeicons/primeicons.css';
import { logoutHandler } from '../reduxSlices/LoginSlice';
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout=()=>{
    dispatch(logoutHandler());
  }

  const items = [
    {
      label: "Project X",
    },
    {
      label: "Terms And Service",
      url: "",
    },
  ];

  const start = (
    <img
      alt="iiitdwd-logo"
      src="/images/iiit-logo.png"
      height="60"
      className="mr-2"
    ></img>
  );
  const end = (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        className="text-bluegray-50 p-3"
      >
        <i className="pi pi-envelope"></i>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        className="text-bluegray-50 p-3"
      >
        <i className="pi pi-user"></i>
      </Link>
      <Link
        to={'/'}
        onClick={logout}
        style={{ textDecoration: "none" }}
        className="text-bluegray-50 p-3"
      >
        <i className="pi pi-sign-out"></i>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="card">
        <Menubar
          model={items}
          start={start}
          end={end}
          style={{ backgroundColor: "#262626", border: "0", borderRadius: "0" }}
        />
      </div>
    </div>
  );
};

export default Navbar;