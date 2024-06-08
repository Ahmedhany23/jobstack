import NavBar from "../components/NavBar";
import Image from "next/image";
import contact from "@/app//assets/contact/contact.svg";
import Footer from "../components/Footer";
//icons
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <>
     
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13857.712419403022!2d-95.461367!3d29.736321000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald%20D.%20Hines%20Waterwall%20Park!5e0!3m2!1sen!2sin!4v1717548203182!5m2!1sen!2sin"
          className="border-0 w-full mt-20 h-[500px]"
          loading="lazy"
        ></iframe>
      </div>
      <div className="relative lg:py-24 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image src={contact} alt="image" width={641} height={641} />
            </div>
            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white rounded-md shadow p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-semibold">
                    Get in touch!
                  </h3>
                  <form>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-input mt-2"
                          placeholder="Name :"
                        />
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <input
                          type="email"
                          name="Email"
                          className="form-input mt-2"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-input mt-2"
                          placeholder="Subject :"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-input mt-2 h-[7rem!important]"
                          placeholder="Message :"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="sumbit"
                      name="send"
                      className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row  justify-center gap-5 ">
          <div className="text-center px-10">
            <div className="relative text-transparent">
              <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm ">
                <IoCallOutline />
              </div>
              <div className="content mt-2">
                <h5 className=" text-lg font-semibold text-black">Phone</h5>
                <p className="text-slate-400 mt-3 max-w-[305px]">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    className=" inline-block title text-emerald-600 hover:text-emerald-700 transition duration-500"
                    href="tel:+152534-468-854"
                  >
                    +152 534-468-854
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center px-10">
            <div className="relative text-transparent">
              <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm ">
                <CiMail />
              </div>
              <div className="content mt-2">
                <h5 className=" text-lg font-semibold text-black">Email</h5>
                <p className="text-slate-400 mt-3 max-w-[305px] ">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    className="  inline-block title text-emerald-600 hover:text-emerald-700 transition duration-500"
                    href=""
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center px-10">
            <div className="relative text-transparent">
              <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm ">
                <CiLocationOn />
              </div>
              <div className="content mt-2">
                <h5 className=" text-lg font-semibold text-black">Location</h5>
                <p className="text-slate-400 mt-3  max-w-[305px]">
                  C/54 Northwest Freeway, Suite 558, Houston, USA 485
                </p>
                <div className="mt-5">
                  <a
                    className=" inline-block title w-fit text-emerald-600 hover:text-emerald-700 transition duration-500  "
                    href="#map"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}
