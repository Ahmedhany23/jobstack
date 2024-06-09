import Image from "next/image";
import Link from "next/link";
//icons
import { FaRegCheckCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
//image
import image from "@/app/assets/Home/categories/cate.webp";
import girl from "@/app/assets/Home/hero/girlimage.webp";
import girl2 from "@/app/assets/Home/hero/imagegirl2.jpg";
export default function Contact() {
  return (
    <section className="py-[100px] container mx-auto grid grid-cols-1 md:grid-cols-12 gap-[120px] md:gap-0  items-center  justify-items-center ">
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
    <div className="lg:col-span-7 md:col-span-6">
      <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal font-semibold">
        Millions of jobs.
        <br />
        Find the one that&apos;s right for you.
      </h3>
      <p className="text-state-400 max-w-xl">
        Search all the open positions on the web. Get your own personalized
        salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>
      <ul className="text-slate-400 mt-4">
        <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]">
          <FaRegCheckCircle className=" text-emerald-600 h-[1em] w-[1em] text-xl" />
          Digital Marketing Solutions for Tomorrow
        </li>
        <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]">
          <FaRegCheckCircle className=" text-emerald-600 h-[1em] w-[1em] text-xl" />
          Our Talented & Experienced Marketing Agency
        </li>
        <li className="mb-1 flex items-center gap-2 text-[15px] text-[#94a3b8]">
          <FaRegCheckCircle className=" text-emerald-600 h-[1em] w-[1em] text-xl" />
          Create your own skin to match your brand
        </li>
      </ul>
      <div className="mt-6">
        <Link
          href="/contact"
          className=" bg-emerald-600 hover:bg-emeraled-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md inline-flex items-center p-2 gap-2"
        >
          <CiMail className="text-white" /> Contact us
        </Link>
      </div>
    </div>
  </section>
  )
}
