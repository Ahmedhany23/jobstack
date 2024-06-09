"use client";
import Link from "next/link";
import Image from "next/image";
//icons
import { IoPieChartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChalkboardTeacher, FaRegCheckCircle } from "react-icons/fa";


//framer motion
import { motion } from "framer-motion";
import { animation } from "../../app/animation/animation";
//image
import Job from "./job";
import Compaines from "./companies";
import ContactSection from "../components/ContactSection";

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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
      {/* Contact Us */}
      <ContactSection/>
      {/* Popular Jobs */}
      <Job />
      {/* Get Job */}
      <section className="py-36 w-full table relative bg-[url('./assets/Home/categories/getjob.jpg')] bg-cover">
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">
              Get the job that&apos;s right for you
            </h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto grid md:grid-cols-3 text-center py-[70px]">
        <div>
          <h5 className="text-[48px] font-semibold">1,548K+</h5>
          <p className="text-slate-400 text-[14px]">JOB FULFILLMENT</p>
        </div>
        <div>
          <h5 className="text-[48px] font-semibold">25+</h5>
          <p className="text-slate-400 text-[14px]">BRANCHES</p>
        </div>
        <div>
          <h5 className="text-[48px] font-semibold">9+</h5>
          <p className="text-slate-400 text-[14px]">YEARS EXPERIENCE</p>
        </div>
      </section>
      {/* Popular Compainer */}
      <Compaines />
    </main>
  );
}
