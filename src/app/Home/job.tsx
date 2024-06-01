import {FaFacebook,FaStar,FaGoogle,FaSpotify,FaLinkedin}from "react-icons/fa";
import { MdVerified, MdArrowOutward} from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { SiLenovo } from "react-icons/si";
import {CiLocationOn, CiDollar } from "react-icons/ci";
import Link from "next/link";

//framer motion
import { motion } from "framer-motion";
import { animation } from "../../app/animation/animation";

const jobs = [
    {
      name: "Facebook",
      field: "Web Designer / Developer",
      location: "Australia",
      icon: <FaFacebook className="size-8" />,
    },
    {
      name: "Google",
      field: "Marketing Director",
      location: "USA",
      icon: <FaGoogle className="size-8" />,
    },
    {
      name: "Android",
      field: "Applictaion Developer",
      location: "China",
      icon: <DiAndroid className="size-8" />,
    },
    {
      name: "Lenovo",
      field: "Senior Product Designer",
      location: "Australia",
      icon: <SiLenovo className="size-8" />,
    },
    {
      name: "Spotify",
      field: "Web Designer / Developer",
      location: "Australia",
      icon: <FaSpotify className="size-8" />,
    },
    {
      name: "Linkedin",
      field: "Php Developer",
      location: "Pakistan",
      icon: <FaLinkedin className="size-8" />,
    },
  ];

export default function Job() {
  return (
    <section>
        <div className=" container mx-auto md:pb-24 pb-16">
          <motion.div
            initial={animation.hiddeny}
            whileInView={animation.visibley}
            viewport={{ once: true }}
            className="grid grid-cols-1 text-center pb-8"
          >
            <h3 className="mb-4 md:text-[25px] md:leading-normal text-2xl font-semibold">
              Popular Jobs
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-[30px]">
            {jobs.map((job, i) => {
              return (
                <div
                  key={i}
                  className="group rounded-lg shadow hover:shadow-lg transiton-all duration-500"
                >
                  <div className="flex items-ecnter justify-between p-6">
                    <div className="flex items-center">
                      <div className="size-14 flex items-center justify-center bg-white shadow rounded-md">
                        {job.icon}
                      </div>
                      <div className="ms-3">
                        <Link
                          href="/"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          {job.name}
                        </Link>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="items-center inline-flex text-[15px] justify-center text-center p-0 h-12 w-12 rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 text-emerald-600 group-hover:text-white"
                    >
                      <MdArrowOutward />
                    </Link>
                  </div>
                  <div className="lg:flex items-center justify-between border-t border-gray-100 p-6">
                    <div>
                      <Link
                        href="/"
                        className="text-lg font-semibold Hover:text-emerald-600"
                      >
                        {job.field}
                      </Link>
                      <p className="text-slate-400 mt-1">Total Openings: 1</p>
                    </div>
                    <p className="text-slate-400 lg:mt-0 mt-4 flex items-center">
                      <CiDollar className=" text-emerald-600" />
                      $4,000 - $4,500
                    </p>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 flex justify-between items-center">
                    <div className="">
                      <span className="inline-flex items-center font-semibold">
                        <MdVerified className="text-blue-500" />
                        Verified
                      </span>
                      <ul className="inline-flex items-center ms-1 text-yellow-400 gap-2 space-x-1">
                        <li className="inline">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="inline">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="inline">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="inline">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="inline">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="inline text-slate-400 font-semibold">
                          4.8
                        </li>
                      </ul>
                    </div>
                    <span className="inline-flex items-center me-1 text-slate-400">
                      <CiLocationOn className="text-slate-600 text-xl" />
                      {job.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}
