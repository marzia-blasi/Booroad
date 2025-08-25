import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export default function DefaultLayout() {

    return (
        <>
            <Outlet />
            <Footer />
        </>
    )

}