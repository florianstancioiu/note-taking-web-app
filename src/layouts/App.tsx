import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <>
      <div className="lg:hidden">
        <Header />
        <Outlet />
        <Menu />
      </div>
      <div className="hidden lg:block">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
