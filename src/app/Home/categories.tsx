"use client";
import Link from "next/link";
import Image from "next/image";
//icons
import { IoPieChartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
//framer motion
import { motion } from "framer-motion";
import { animation } from "../../app/animation/animation";
//image
import image from "@/app/assets/categories/image.jpg";

//categories
const categories = [
  {
    icon: <IoPieChartOutline className="h-[1em] w-[1em]" />,
    name: "Business Development",
    jobs: 74,
  },
  {
    icon: <MdMenuBook className="h-[1em] w-[1em]" />,
    name: "Makreting & Communication",
    jobs: 20,
  },
  {
    icon: <LuPieChart className="h-[1em] w-[1em]" />,
    name: "Project Management",
    jobs: 35,
  },
  {
    icon: <PiPhoneCallFill className="h-[1em] w-[1em]" />,
    name: "Customer Serive",
    jobs: 46,
  },
  {
    icon: <FaChalkboardTeacher className="h-[1em] w-[1em]" />,
    name: "Software Engineering",
    jobs: 60,
  },
];

export default function Categories() {
  return (
    <main>
      {/* Popular Categories */}
      <section>
        <div className=" container mx-auto py-[80px]">
          <motion.div
            initial={animation.hiddeny}
            whileInView={animation.visibley}
            viewport={{once:true}}
            className="grid grid-cols-1 text-center pb-8"
          >
            <h3 className="mb-4 md:text-[25px] md:leading-normal text-2xl font-semibold">
              Popular Categories
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once:true}}
            className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-8 gap-[30px]"
          >
            {categories.map((c, i) => {
              return (
                <div
                  key={i}
                  className="group px-3 py-10 rounded-full shadow hover:shadow-emerald-600/10 text-center bg-white hover:bg-emerald-600/5 transition duration-500"
                >
                  <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm transition duration-500 mx-auto">
                    {c.icon}
                  </div>
                  <div className="content mt-6">
                    <Link
                      href="/"
                      className="text-lg font-semibold hover:text-emerald-600"
                    >
                      {c.name}
                    </Link>
                    <p className="text-slate-400 mt-3">{c.jobs} Jobs</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* Contact us */}
      <section className="py-[100px] container mx-auto flex flex-col  justify-center md:flex-row md:items-center ">
        <Image src={image} alt="image" className="md:w-[40vw] lg:w-fit"></Image>
        <div>
          <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal font-semibold">
            Millions of jobs.
            <br />
            Find the one that&apos;s right for you.
          </h3>
          <p className="text-state-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
          <ul className="text-slate-400 mt-4">
            <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]"><FaRegCheckCircle className=" text-emerald-600" />Digital Marketing Solutions for Tomorrow</li>
            <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]"><FaRegCheckCircle className=" text-emerald-600" />Our Talented & Experienced Marketing Agency</li>
            <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]"><FaRegCheckCircle className=" text-emerald-600" />Create your own skin to match your brand</li>
          </ul>
          <div className="mt-6">
            <Link href='/contact' className="btn bg-emerald-600 hover:bg-emeraled-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md inline-flex items-center p-2 gap-2"><CiMail className="text-white"/> Contact us</Link>
          </div>
        </div>
      </section>
      {/* Popular Jobs */}
      <section>
        
      </section>
    </main>
  );
}
