import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Collapse from '../components/Collapse';
import Link from 'next/link';
import Image from "next/image";
//images
import girl from "@/app/assets/Home/hero/girlimage.webp";
import girl2 from "@/app/assets/Home/hero/imagegirl2.jpg";
//icons
import { BsTelephone } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { BsBagCheck } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import Explore from '../components/Explore';
import Footer from '../components/Footer';

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
    {
      icon: (
        <FiUserPlus className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Apply with Confidence",
    },
    {
      icon: (
        <FiUserPlus className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Reduce Hiring Bias",
    },
    {
      icon: (
        <BsBagCheck  className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "Proactive Employers",
    },
    {
      icon: (
        <MdPeople  className="text-[30px] text-emerald-600 group-hover:text-white h-[1em] w-[1em]" />
      ),
      title: "No Missed Opportunities",
    },
  ];

export default function page() {
  return (
    <header className='bg-[#f8fafc]'>
        <NavBar/>
        <Header title={"How it works?"} path={"Services"}/>
        <div className=' container mx-auto md:mt-24 mt-16'>
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
        </div>
        <section className="relative container mx-auto md:mt-24 mt-16  ">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[40px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <div className="relative">
                <Image
                  src={girl}
                  alt="image"
                  className="lg:w-[400px] w-[280px] rounded-md shadow"
                />
              </div>
              <div className=" absolute md:-end-4 end-0 -bottom-16">
                <Image
                  src={girl2}
                  alt="image"
                  className="lg:w-[280px] w-[200px] border-8 border-white rounded-md shadow "
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-6 mt-14 md:mt-0  ">
            <h3 className="mb-6 md:text-[26px] text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 max-w-xl">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
            <div className="mt-7">
              <Collapse
                question={"How does it work ?"}
                answer={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
              />
              <Collapse
                question={"Do I need a designer to use Jobstack ?"}
                answer={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
              />
              <Collapse
                question={"What do I need to do to start selling ?"}
                answer={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
              />
            </div>
          </div>
        </div>
      </section>
      <Explore/>
      <Footer/>
    </header>
  )
}
