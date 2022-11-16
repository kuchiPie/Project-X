

import { Menu } from "primereact/menu";

const CustomSidebar = ({ visibleLeft }) => {
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
            window.location.pathname = "admin/manage_sessions";
          },
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Manage Faculty",
          command: () => {
            window.location.pathname = "admin/manage_faculty";
          },
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Manage Students",
          command: () => {
            window.location.pathname = "admin/manage_students";
          },
          style: {
            fontSize: "0.85em",
          },
        },
      ],
    },
    {
      label: "Module Designers",
      style: {
        marginTop: "20px",
      },
      items: [
        {
          label: "Aman Gupta",
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Omkar Gowda",
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Chirag Mittal",
          style: {
            fontSize: "0.85em",
          },
        },
        {
          label: "Shreyas Bulbule",
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
      <div>
        {/* <Sidebar
              visible={true}
              maskStyle={{display:'none'}}
              style={{
                borderRadius:'10px',
                color: "white",
                width: "15em",
                height: "75vh",
              }}
              className="shadow-2"
              showCloseIcon={false}
              
            >
              <div>
                <Menu 
                    model={items}
                    className="p-3 shadow-2"
                />
              </div>
            </Sidebar> */}
      </div>
      {visibleLeft ? (
         <div className="shadow-2 py-5 mt-2" style={{height:"80vh",width:"13vw"}} >
         <Menu model={items} className="ml-3 p-2 shadow-2" />
       </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CustomSidebar;
