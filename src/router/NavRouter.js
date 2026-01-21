import { Route,  Routes } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import UserLayout from "./UserLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

export default function NavRouter(){
    return(
        <>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<UserLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
        </>
    )
}