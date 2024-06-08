"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//icons
import { IoIosMenu, IoIosSearch, IoMdArrowDropdown } from "react-icons/io";

//images
import logo from "@/app/assets/navbar/logo.png";
import logo2 from "@/app/assets/navbar/logo2.png";
import logo3 from "@/app/assets/footer/logo.png"
import image from "@/app/assets/navbar/image.webp";
import { usePathname } from "next/navigation";



//lists
const lists = [
  { name: "Home",url:"/" },
  {
    name: "Jobs",
    arrow: <IoMdArrowDropdown />,
    
    submenu: [
      { name: "Job Categories" ,url:"/Jobs/job-categories" },
      { name: "Job Apply",url:"/Jobs/job-apply", },
      { name: "Job Career",url:"/Jobs/career" },
    ],
  },
  { name: "About Us",url:"/about" },
  { name: "Services",url:"/services" },
  { name: "Contact", url: "/contact" },
];


export default function NavBar({color}:any) {
  const path = usePathname()
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



  return (
    <header className={` fixed top-0 left-0 right-0 z-10  ${nav? 'shadow-lg bg-white' : 'lg:bg-transparent bg-white'}`}>
      <div className="container mx-auto ">
        <nav className={` min-h-[74px] flex justify-between items-center mx-auto  px-2  relative z-[200]  `}  >
          <div className=" inline-block ">
            
            <Link href='/'>
            <Image src={logo} alt="logo" className="block md:hidden h-10" />
            <Image
              src={color?logo2:nav?logo2:logo3}
              alt="logo"
              className="hidden md:block text-center items-center"
            />
            </Link>
            
          </div>
          <div className="flex gap-2 items-center">
            <ul className="lg:flex gap-5 mr-5 hidden relative">
              {lists.map((item, i) => {
                return (
                  <li key={i} >
                    <div
                      className={`flex  items-center cursor-pointer ${color?'':nav?'':'text-white'} hover:text-emerald-600 duration-[200ms] ${
                        path === item.url ? "text-emerald-600" : ""
                      }`}
                      onClick={() => {
                        item.name === "Jobs"
                          ? setSubMenu(!subMenu)
                          : setSubMenu(false);
                      }}
                    >
                      <Link href={item.url?item.url:''}>{item.name}</Link>
                      
                      {item.arrow}
                    </div>
                  </li>
                );
              })}

              <ul
                className={`font-light absolute  left-8 w-[180px] ${
                  subMenu ? "top-[45px]" : "top-[74px] opacity-0 "
                }  rounded-md px-4  bg-white shadow-md flex flex-col duration-[400ms]`}
              >
                {lists[1].submenu?.map((sm) => {
                  return (
                    <li
                      key={sm.name}
                      className={` cursor-pointer py-1  hover:text-emerald-600 duration-[200ms] ${path === sm.url ? "text-emerald-600" : ""}`}
                    >
                      <Link href={sm.url} >{sm.name}</Link>
                      
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
          className={` absolute ${
            isopen ? "top-[72px] " : "top-[-200px] opacity-0"
          } w-full shadow-sm py-[10px] px-[20px] flex flex-col gap-4 text-[15px] font-semibold   duration-[400ms] bg-white lg:hidden `}
        >
          {lists.map((item, i) => {
            return (
              <li key={i} >
                <div
                  className={`flex justify-between items-center cursor-pointer  ${
                    path === item.url ? "text-emerald-600" : ""
                  }`}
                  onClick={() => {
                    item.name === "Jobs"
                      ? setSubMenu(!subMenu)
                      : setSubMenu(false);
                  }}
                >
                 <Link href={item.url?item.url:''}>{item.name}</Link>
                  {item.arrow}
                </div>
                {subMenu && (
                  <ul className="px-5 font-light">
                    {item.submenu?.map((m, ia) => {
                      return (
                        <li key={m.name} className={`py-1 cursor-pointer ${
                          path === m.url ? "text-emerald-600" : ""
                        }`}>
                          <Link href={m.url} >{m.name}</Link>
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
