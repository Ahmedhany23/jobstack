import { MdOutlineMailOutline } from "react-icons/md";
import { PiPencilThin } from "react-icons/pi";
import Link from "next/link";
export default function Explore() {
  return (
    <section className="md:mt-24  mt-16 z-10 py-10">
        <div className=" container mx-auto ">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-12  grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-8 md:col-span-7">
                  <div className=" relative z-10">
                    <h3 className="text-2xl font-semibold text-black mb-4">
                      Explore a job now!
                    </h3>
                    <p className="text-slate-400 max-w-xl">
                      Search all the open positions on the web. Get your own
                      personalized salary estimate. Read reviews on over 30000+
                      companies worldwide.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-5">
                  <div className="relative z-10">
                  <Link href="Jobs/job-apply" className="btn bg-emerald-600 hover-bg-emerald-700 border-emerald-600 text-white rounded-md">Apply Now</Link>
                  <Link href="aboutus" className="btn bg-emerald-600/5 hover:bg-emerald-700 border-emerald-600/10 hover:border-emerald-600 hover:text-white text-emerald-600  rounded-md ms-2">Learn More</Link>
                  </div>
                </div>
              </div>
                <div className="absolute -top-5 -start-5">
                  <MdOutlineMailOutline className="lg:text-[150px] text-7xl text-black/5 -rotate-45"/>
                </div>
                <div className="absolute -bottom-5 -end-5">
                  <PiPencilThin className="lg:text-[150px] text-7xl text-black/5 rotate-40"/>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}
