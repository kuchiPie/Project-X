import { Menu } from "primereact/menu";

const StudentSidebar = ({ visibleLeft }) => {
  const items = [
        {
          label: "Profile",
          command: () => {
            window.location.pathname = "student/profile";
          },
          style: {
            fontSize: "1.3em",
            width: "10vw"
          },
        },
        {
          label: "Outpass",
          command: () => {
            window.location.pathname = "student/outpass";
          },
          style: {
            fontSize: "1.3em",
            width: "10vw"
          },
        }
  ];
  return (
    <>
      {visibleLeft ? (
         <Menu model={items} header="Student Portal" className="mx-3 h-screen p-3 surface-100" />
      ) : (
        <></>
      )}
    </>
  );
};

export default StudentSidebar;
