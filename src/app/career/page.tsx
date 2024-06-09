import Link from "next/link";


import ContactSection from "../components/ContactSection";
import Postions from "../components/Postions";

const Opening = [
  { title: "Frontend Developer", count: 1 },
  { title: "Business Development Manager", count: 2 },
  { title: "Backend Developer", count: 4 },
];
export default function Career() {
  return (
    <main className=" relative md:pb-24 pb-16 ">
      <Postions/>
      {/* Contact Us */}
      <ContactSection />
      <section className="container mx-auto md:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center pb-8">
          <h4 className="text-2xl md:text-[26px] mb-4 font-semibold leading-normal">
            Job Openings
          </h4>
          <p className="leading-normal text-[15px] text-slate-400 mx-auto max-w-xl ">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="lg:flex justify-center mt-8">
          <div className="lg:w-3/4">
            {Opening.map((o) => (
              <div
                key={o.title}
                className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg transition-all duration-500 mb-6"
              >
                <div>
                  <Link href='/Jobs/job-apply' className="text-lg font-semibold hover:text-emerald-600">
                    {o.title}
                  </Link>
                  <p className="text-slate-400 mt-1">Total Openings: {o.count}</p>
                </div>
                <Link className="btn rounded-full bg-transparent group-hover:bg-emerald-600 border border-slate-100 text-slate-400 group-hover:text-white md:mt-0 mt-4" href='/Jobs/job-apply'>Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
