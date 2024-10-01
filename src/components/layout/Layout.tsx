import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { FC } from "react";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
