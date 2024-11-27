import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col items-center w-[100vw]">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
