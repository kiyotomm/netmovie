import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden ">
        <MobileNavbar />
      </div>
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
