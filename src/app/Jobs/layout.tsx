import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function layout({children}:{children:ReactNode}) {
  return (
    <>
    <NavBar color={false}/>
    {children}
    <Footer/>
    </>
  )
}
