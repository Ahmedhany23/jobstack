import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-[#f8fafc]">
    <NavBar color={false}/>
    <Header title={"Current Openings"} path={"Career"}/>
    {children}
    <Footer/>
    </div>
  )
}
