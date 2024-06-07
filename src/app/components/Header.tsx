import Link from "next/link";
import Image from "next/image";
//icon
import { IoIosArrowForward } from "react-icons/io";
//image
import background from "@/app/assets/header/header.jpg";
export default function Header({ title, path }: any) {
  return (
    <header className="relative table w-full py-36 ">
      <div className="">
        <Image
          src={background}
          alt="workers"
          quality="100"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <div className="absolute inset-0 bg-emerald-900/90" />
      <div className="container mx-auto">
        <div className="flex flex-col  text-center ">
          <h3 className="md:text-3xl text-2xl leading-snug tracking-wide font-medium text-white z-20 ">
            {title}
          </h3>
          <ul className="mt-9 flex justify-center">
            <li className=" flex items-center gap-1 text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white  ">
              <Link className="z-30" href="/">
                Jobstack
              </Link>
              <IoIosArrowForward className="z-20" />
            </li>
            <li className="text-[15px] font-semibold duration-500 ease-in-out text-white z-20">
              {path}
            </li>
            <div className="custom-shape-divider-bottom-1717403548">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
