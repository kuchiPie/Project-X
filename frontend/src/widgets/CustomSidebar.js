import { Menu } from "primereact/menu";
import { useSelector } from "react-redux";

const CustomSidebar = ({ visibleLeft }) => {

  const id = useSelector(state => state.login.loggedUser._id);

  const items = [
    {
      label: "Quick Links",
      items: [
        {
          label: "Dashboard",
          url: "",
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Manage Sessions",
          command: () => {
            window.location.pathname = `/admin/${id}/manage_sessions`;
          },
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Manage Faculty",
          command: () => {
            window.location.pathname = `admin/${id}/manage_faculty`;
          },
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Manage Students",
          command: () => {
            window.location.pathname = `admin/${id}/manage_students`;
          },
          style: {
            fontSize: "0.85em",
          },
        },
      ],
    },
    
    {
      label: "Support",
      style: {
        marginTop: "20px",
      },
      items: [
        {
          label: "ProjectX@iiitdwd.ac.in",
          style: {
            fontSize: "0.85rem",
          },
        },
      ],
    },
  ];
  return (
    <>
      {visibleLeft ? (
         <div className="shadow-2 py-5 mt-2 pr-3" style={{height:"80vh"}} >
         <Menu model={items} className="ml-3 border-none w-12rem" />
       </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomSidebar;
