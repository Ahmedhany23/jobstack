//icons
import { IoPieChartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

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
        <div className="contaienr mx-auto bg-[#f8fafc]">
        <div
            className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-8 gap-[30px] bg-[#f8fafc] "
          >
            {categories.map((c, i) => {
              return (
                <div
                  key={i}
                  className="group px-3  py-10 rounded-md shadow hover:shadow-emerald-600/10 text-center bg-white hover:bg-emerald-600/5 transition duration-500"
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
    </main>
  )
}
