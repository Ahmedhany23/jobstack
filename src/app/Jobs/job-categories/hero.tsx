import Link from "next/link";
//icons
import { IoPieChartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

//
import Image from "next/image";
import girl from "@/app/assets/Home/hero/girlimage.webp";
import girl2 from "@/app/assets/Home/hero/imagegirl2.jpg";
import Collapse from "@/app/components/Collapse";
import Explore from "@/app/components/Explore";
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
  {
    icon: <IoPieChartOutline className="h-[1em] w-[1em]" />,
    name: "Human Resource HR",
    jobs: 74,
  },
  {
    icon: <MdMenuBook className="h-[1em] w-[1em]" />,
    name: "It & Networking",
    jobs: 20,
  },
  {
    icon: <LuPieChart className="h-[1em] w-[1em]" />,
    name: "Sales & Marketing",
    jobs: 35,
  },
  {
    icon: <PiPhoneCallFill className="h-[1em] w-[1em]" />,
    name: "Project Manager",
    jobs: 46,
  },
  {
    icon: <FaChalkboardTeacher className="h-[1em] w-[1em]" />,
    name: "Data Science",
    jobs: 60,
  },
];

export default function Hero() {
  return (
    <main className="relative md:py-24 py-16">
      <section>
        <div className="container mx-auto bg-[#f8fafc]">
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-8 gap-[30px] bg-[#f8fafc] ">
            {categories.map((c, i) => {
              return (
                <div
                  key={i}
                  className="group px-3  py-10 rounded-md shadow hover:shadow-emerald-600/10 text-center bg-[#f8fafc] hover:bg-emerald-600/5 transition duration-500"
                >
                  <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm transition duration-500 mx-auto">
                    {c.icon}
                  </div>
                  <div className="content mt-6 text-lg font-semibold hover:text-emerald-600">
                    {c.name}
                    <p className="text-slate-400 mt-3">{c.jobs} Jobs</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
      <Explore />
    </main>
  );
}
