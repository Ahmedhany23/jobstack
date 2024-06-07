"use client";
import Blog from "./Home/blog";
import Categories from "./Home/categories";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./Home/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPage, setPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPage(true);
    }, 300);
  }, []);
  return (
    <main>
      {showPage ? (
        <div>
          <NavBar color={true}/>
          <Hero />
          <Categories />
          <Blog/>
          <Footer/>
        </div>
      ) : (
        <div className="flex justify-center item-center py-[300px] lg:py-[400px]">
          <div className="loader"></div>
        </div>
      )}
    </main>
  );
}
