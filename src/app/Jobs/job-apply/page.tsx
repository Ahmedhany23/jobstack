"use client"

import NavBar from "@/app/components/NavBar"
import Header from "../../components/Header"
import Form from "./Form"
import Footer from "@/app/components/Footer"

export default function JobApply() {
  return (
    <main>
        <NavBar color={false}/>
        <Header title={"Job Categories"} path={"Job apply form"}/>
        <Form/>
        <Footer/>
    </main>
  )
}
