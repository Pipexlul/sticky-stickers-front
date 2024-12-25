import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header/Header.tsx";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
