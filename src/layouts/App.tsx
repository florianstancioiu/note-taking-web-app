import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <>
      <div className="xl:hidden min-h-dvh bg-white">
        <Header />
        <Outlet />
        <Menu />
      </div>
      <div className="hidden xl:flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
