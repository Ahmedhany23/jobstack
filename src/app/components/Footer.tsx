import Image from "next/image";
import Link from "next/link";

//image
import logo from "@/app/assets/footer/logo.png"

//icons
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative bg-slate-900  ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1  ">
          <div className="relative py-12 mx-auto">
            <div className="relative w-full">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="md:col-span-3">
                <Link href='/' className="flex  md:justify-start focus:outline-none"><Image src={logo} alt="logo"/></Link>
                </div>
                <div className="md:col-span-9">
                    <ul className=" text-center space-x-3 flex items-center justify-center flex-col md:flex-row gap-5">
                        <li><Link className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4" href="/">Home</Link></li>
                        <li><Link className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4" href="/">How it works</Link></li>
                        <li><Link className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4" href="/">Create a job</Link></li>
                        <li><Link className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4" href="/">About us</Link></li>
                        <li><Link className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4" href="/">Contact us</Link></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] px-0 border-t border-gray-800 ">
        <div className="container text-center mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
                <div className="text-center">
                    <p className="mb-0 text-gray-300 font-medium">©2024 Jobstack.</p>
                </div>
                <ul className="text-center space-x-0.5 flex gap-4">
                    <li><FaLinkedinIn className="  border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"/></li>
                    <li><FaFacebookF className="  border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"/></li>
                    <li><FaInstagram className="  border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"/></li>
                    <li><FaTwitter className="  border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"/></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
