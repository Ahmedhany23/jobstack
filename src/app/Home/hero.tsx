"use client"
import Image from "next/image";


//framer motion
import { motion } from "framer-motion";
//images
import girl from "@/app/assets/hero/girlimage.webp";
import office from "@/app/assets/hero/office.webp";
import img1 from "@/app/assets/hero/img1.jpg";
import img2 from "@/app/assets/hero/img2.jpg";
import img3 from "@/app/assets/hero/img3.jpg";
import img4 from "@/app/assets/hero/img4.jpg";
import img5 from "@/app/assets/hero/img5.jpg";
import image from "@/app/assets/hero/image.jpg"
//icons
import { RiShoppingBagLine,RiAlarmWarningLine  } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
//animation
import {animation} from "@/app/animation/animation"


const images = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

export default function Hero() {
 
  
  return (
    <header className="xl:px-6 pt-[60px] lg:pt-[80px] ">
      <main className="md:container mx-auto flex flex-col w-full lg:flex-row items-center justify-center gap-5 py-[144px]">
        <motion.div initial={animation.left} whileInView={animation.visible} viewport={{once:true}}>
          <h4 className="text-3xl sm:text-4xl font-bold mb-2 leading-normal">
            Find the
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-emerald-600 relative inline-block ml-3">
              <span className="relative text-white font-bold">Best Job</span>
            </span>
            <br /> offer for you.
          </h4>
          <p className="text-slate-400 text-lg max-w-xl">
            Find Jobs, Employment & Career Opportunities. Some of the companies
            we&apos;ve helped recruit excellent applicants over the years.
          </p>
          <div className="bg-white border-0 shadow rounded p-3 mt-4 lg:w-[609px]">
            <form action="#">
              <div className=" text-start ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0">
                  <div className="relative bg-slate-50 flex px-1 py-4 rounded-md">
                    <RiShoppingBagLine className=" text-emerald-600 text-xl" />
                    <input
                      type="text"
                      id="search"
                      name="name"
                      placeholder="Search..."
                      className="bg-slate-50 px-2 text-slate-400 outline-none"
                    />
                  </div>
                  <div className="relative bg-slate-50 flex px-1 py-4">
                    <IoLocationOutline className=" text-emerald-600 text-xl" />
                    <select
                      name="country"
                      id="country"
                      className="bg-slate-50 px-2 text-slate-400 outline-none w-full rounded-md"
                    >
                      <option value="egypt">Egypt</option>
                      <option value="canada">Canada</option>
                      <option value="gambia">Gambia</option>
                      <option value="estonia">Estonia</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    value="Search"
                    className=" bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white w-full px-1 py-4 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mt-2">
            <span className="text-slate-400">
              <span className="text-[#3c4858]">Popular Searches :</span>
              Designer, Developer, Web, IOS, PHP Senior Engineer
            </span>
          </div>
        </motion.div>
        {/* <div className="  mt-5 lg:w-[30vw]  flex justify-center  ">
          <div className="relative  ">
            <div className="relative z-10">
              <Image
                src={girl}
                alt="image"
                className="lg:w-[20vw] w-[200px] md:w-[200px] rounded-xl shadow lg:ml-32 xl:ml-48 mt-7"
              />
              <div className="absolute left-5 -bottom-5  lg:-bottom-20 lg:left-48 xl:left-72 end-2 p-4 rounded-lg shadow-md text-center w-48 bg-white lg:w-60 z-10 ">
                <h5 className="text-lg font-semibold lg:mb-3">
                  5k+ candidates get job
                </h5>
                <ul className="relative flex items-center ml-4">
                  {images.map((img, i) => {
                    return (
                      <li className="relative -ms-3" key={i}>
                        <Image
                          src={img.image}
                          alt="image"
                          className=" size-10 rounded-full shadow-md border-4 border-white relative hover:scale-105 transition-all duration-500"
                        />
                      </li>
                    );
                  })}
                  <li className="relative -ms-3 size-10 rounded-full  bg-emerald-600 flex items-center justify-center text-white text-2xl font-thin">
                    +
                  </li>
                </ul>
              </div>
              
            </div>
           <div className="absolute -bottom-60 -left-20 lg:-bottom-16 lg:left-0 z-20">
                <Image
                  src={office}
                  alt="office"
                  className=" w-[200px] lg:w-[20vw] xl:w-[300px] border-8 border-white rounded-xl"
                ></Image>
                <div className="  absolute -bottom-10 left-20 lg:top-0 lg:left-1 p-4 rounded-lg shadow-md text-center bg-white w-60 max-h-[60px] flex items-center gap-3 ">
                <RiAlarmWarningLine className="text-yellow-600 text-xl" />
                    <p className="text-lg font-semibold mb-0 ms-2 z-0">Job Alert Subscribe</p>
                </div>
              </div>
              <div
                className=" absolute overflow-hidden 
        md:h-[400px] h-[300px] md:w-[400px] w-[300px] bg-gradient-to-tl to-emerald-600/5 via-emerald-600/50 from-emerald-600 
         z-0 rounded-full top-0 -left-10 lg:left-0"></div>
              
           
          </div>
        </div> */}
        <div>
            <Image src={image} loading="eager" priority alt="image"/>
        </div>
      </main>
    </header>
  );
}
