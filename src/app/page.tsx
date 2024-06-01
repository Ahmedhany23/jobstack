"use client";
import Categories from "./Home/categories";
import Hero from "./Home/hero";
import NavBar from "./components/NavBar";
import { useEffect,useState } from "react";

export default function Home() {
  const [showPage, setPage] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPage(true)
    }, 700);
}, [])


  return (
    <main>
      {showPage?
      <div>
        <NavBar />
        <Hero />
        <Categories/>
      </div>
      :
      <div className="flex justify-center item-center py-[300px] lg:py-[500px]"><div className="loader"></div></div>
    }
      
      
    </main>
  );
}
