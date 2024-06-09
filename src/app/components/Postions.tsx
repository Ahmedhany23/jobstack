import React from 'react'
import Link from "next/link";
//icons
import { BsTelephone } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
const Carrers = [
    {
      icon: (
        <BsTelephone className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "24/7 Support",
    },
    {
      icon: (
        <FaReact className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Tech & Startup Jobs",
    },
    {
      icon: (
        <FiUserPlus className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Quick & Easy",
    },
    {
      icon: (
        <GiSandsOfTime className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Save Time",
    },
  ];
export default function Postions() {
  return (
    <section className="container mx-auto md:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 md:text-[26px] text-2xl leading-normal font-semibold">
            Here&apos;s why you&apos;ll love it Jobstack
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-[30px]">
          {Carrers.map((c) => (
            <div
              key={c.title}
              className="group p-6 shadow rounded-md bg-[#f8fafc] hover:bg-emerald-600/5 text-center transition-all duration-500"
            >
              <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 shadow rounded-lg transition-all duration-500">
                {c.icon}
              </div>
              <div className="mt-4">
                <Link
                  href="/career"
                  className="text-xl font-semibold group-hover:text-emerald-600"
                >
                  {c.title}
                </Link>
                <p className="text-slate-400 mt-3 mb-2 leading-relaxed ">
                  Many desktop publishing now use and a search for job
                </p>
                <Link
                  href="/career"
                  className="hover:text-emerald-600 font-medium transition-all duration-500 inline-flex items-center mt-4"
                >
                  Read More <FaArrowRight className="ms-1 h-[1em] w-[1em]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
