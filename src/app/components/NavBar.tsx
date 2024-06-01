"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
//icons
import { IoIosMenu, IoIosSearch, IoMdArrowDropdown } from "react-icons/io";

//images
import logo from "@/app/assets/navbar/logo.png";
import logo2 from "@/app/assets/navbar/logo2.png";
import image from "@/app/assets/navbar/image.webp";

//lists
const lists = [
  { name: "Home" },
  {
    name: "Jobs",
    arrow: <IoMdArrowDropdown />,
    submenu: [
      { name: "Job Categories" },
      { name: "Job Vacancies" },
      { name: "Job Post" },
      { name: "Job Career" },
    ],
  },
  { name: "About Us" },
  { name: "Services" },
  { name: "Contact", url: "/contact" },
];
//submenu
const submenu = [
  { name: "Job Categories" },
  { name: "Job Vacancies" },
  { name: "Job Post" },
  { name: "Job Career" },
];

export default function NavBar() {
    //Menuscroll
    useEffect(() => {
        var lastScrollTop = 0;
        window.onscroll = () => {
          var scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setNav(true);
          } else {
            setNav(false);
          }
        };
      }, []);
    const [nav, setNav] = useState(false);
  //Menu
  const [isopen, setIsopen] = useState(false);
  //SubMenu
  const [subMenu, setSubMenu] = useState(false);
  //Active
  const [index, setIndex] = useState(0);

  //Active Function
  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <header className={` fixed duration-300 top-0 left-0 right-0 z-20 ${nav? 'shadow-lg' : ''}`}>
      <div className="md:container mx-auto relative z-20 ">
        <nav className=" relative min-h-[74px] flex justify-between items-center mx-auto bg-white px-2  z-20  ">
          <div className=" inline-block ">
            <Image src={logo} alt="logo" className="block md:hidden h-10" />
            <Image
              src={logo2}
              alt="logo"
              className="hidden md:block text-center items-center"
            />
          </div>
          <div className="flex gap-2 items-center">
            <ul className="lg:flex gap-5 mr-5 hidden relative">
              {lists.map((item, i) => {
                return (
                  <li key={i} onClick={() => handleClick(i)}>
                    <div
                      className={`flex  items-center cursor-pointer hover:text-emerald-600 duration-[200ms] ${
                        i === index ? "text-emerald-600" : ""
                      }`}
                      onClick={() => {
                        item.name === "Jobs"
                          ? setSubMenu(!subMenu)
                          : setSubMenu(false);
                      }}
                    >
                      {item.name}
                      {item.arrow}
                    </div>
                  </li>
                );
              })}

              <ul
                className={`font-light absolute  left-8 w-[180px] ${
                  subMenu ? "top-[55px]" : "top-[74px] opacity-0 "
                }  rounded-md px-[10px]  shadow-md flex flex-col duration-[400ms]`}
              >
                {submenu?.map((sm) => {
                  return (
                    <li
                      key={sm.name}
                      className={`py-1 cursor-pointer hover:text-emerald-600 duration-[200ms]`}
                    >
                      {sm.name}
                    </li>
                  );
                })}
              </ul>
            </ul>
            <div className="flex items-center relative border rounded-full">
              <input
                type="search"
                name="search"
                className="w-[144px] bg-white outline-none py-[8px] pr-[40px] pl-[12px] rounded-full text-[14px]"
                placeholder="Search..."
              />
              <IoIosSearch className=" absolute right-5 text-[20px]" />
            </div>
            <div className="w-[34px] h-[34px] rounded-full border border-emerald-700">
              <Image src={image} className="rounded-full" alt="image" />
            </div>
            {/* Mobile Responsive */}
            <IoIosMenu
              className="h-[74px] w-[35px] cursor-pointer lg:hidden"
              onClick={() => {
                setIsopen(!isopen);
              }}
            />
          </div>
        </nav>
        {/* Mobile Responsive */}
        <ul
          className={`absolute ${
            isopen ? "top-[75px] " : "top-[-200px] opacity-0"
          } w-full shadow-sm py-[10px] px-[20px] flex flex-col gap-4 text-[15px] font-semibold  duration-[400ms] bg-white z-0 lg:hidden `}
        >
          {lists.map((item, i) => {
            return (
              <li key={i} onClick={() => handleClick(i)}>
                <div
                  className={`flex justify-between items-center cursor-pointer  ${
                    i === index ? "text-emerald-600" : ""
                  }`}
                  onClick={() => {
                    item.name === "Jobs"
                      ? setSubMenu(!subMenu)
                      : setSubMenu(false);
                  }}
                >
                  {item.name}
                  {item.arrow}
                </div>
                {subMenu && (
                  <ul className="px-5 font-light">
                    {item.submenu?.map((m, ia) => {
                      return (
                        <li key={m.name} className={`py-1 cursor-pointer`}>
                          {m.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
