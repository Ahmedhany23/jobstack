import {
  FaFacebook,
  FaStar,
  FaGoogle,
  FaSpotify,
  FaLinkedin,
} from "react-icons/fa";
import { MdVerified, MdArrowOutward } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { SiLenovo } from "react-icons/si";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import Link from "next/link";
const compaines = [
  {
    id: 1,
    name: "Facebook",
    location: "Australia",
    icon: <FaFacebook className="size-8" />,
  },
  {
    id: 2,
    name: "Google",
    location: "USA",
    icon: <FaGoogle className="size-8" />,
  },
  {
    id: 3,
    name: "Android",
    location: "China",
    icon: <DiAndroid className="size-8" />,
  },
  {
    id: 4,
    name: "Lenovo",
    location: "Australia",
    icon: <SiLenovo className="size-8" />,
  },
  {
    id: 5,
    name: "Spotify",
    location: "Australia",
    icon: <FaSpotify className="size-8" />,
  },
  {
    id: 6,
    name: "Linkedin",
    location: "Pakistan",
    icon: <FaLinkedin className="size-8" />,
  },
];
export default function Compaines() {
  return (
    <section>
      <div className="container mx-auto md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Popular Jobs
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 mt-8 gap-[30px]">
          {compaines.map((c, i) => {
            return (
              <div
                key={i}
                className="group relative p-6 rounded-md shadow mt-6"
              >
                <div className="size-14 flex items-center justify-center bg-white shadow rounded-md">
                  {c.icon}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/company-detail/${c.id}`}
                    className="text-lg hover:text-emerald-600 font-semibold"
                  >
                    {c.name}
                  </Link>
                  <p className="mt-2 text-slate-400">
                    Digital Marketing Solutions for Tomorrow
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t bordedr-gray-100 flex justify-between">
                  <span className="text-slate-400 flex items-center">
                    <CiLocationOn className="me-1" /> {c.location}
                  </span>
                  <span className="block font-semibold text-emerald-600">
                    {i} Jobs
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
            <div className="md:col-span-12 text-center">
            <Link href='/' className=" relative text-slate-400 hover:text-emerald-600 duration-500 ease-in-out inline-flex items-center">See More Compaines</Link>
            </div>
        </div>
      </div>
    </section>
  );
}
