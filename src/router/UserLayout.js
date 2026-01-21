import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function UserLayout({footerHide}){
    return(
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer footerHide={footerHide}/>
        </>
    )
}