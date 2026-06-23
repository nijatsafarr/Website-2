import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";
import ErrorPage from "../Components/error404.jsx";
import LogoClouds from "../Components/logoclouds.jsx";
import Icmal from "../Components/icmal.jsx";

export const Route = createRootRoute({
    notFoundComponent: ErrorPage,
    component: () => (
        <>
            <Header />
            <Outlet />
            <LogoClouds/>
            <Footer />
        </>
    )
})