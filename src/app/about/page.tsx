import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Postions from "../components/Postions";
import Image from "next/image";
import image from "@/app/assets/about.jpg";
//icon
import { FaRegCheckCircle,FaRegQuestionCircle } from "react-icons/fa";
import Explore from "../components/Explore";

const Questions = [
  {
    question: "How our Jobstack work ?",
    answer:
      "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.",
  },
  {
    question: "What is the main process open account ?",
    answer:
      "words is random, the reader will not be distracted from making a neutral judgement on the visual impact.",
  },
  {
    question: "How to make unlimited data entry ?",
    answer:
      "Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.",
  },
  {
    question: "Is Jobstack safer to use with my account ?",
    answer:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.",
  },
];

export default function page() {
  return (
    <main className="bg-[#f8fafc]">
      <NavBar />
      <Header title={"About Us"} path={"About Us"} />
      <ContactSection />
      <Postions />

      <div className=" container mx-auto md:mt-24 mt-16">
        <div className="grid grid-cols-1">
          <div className="overflow-hidden bg-emerald-600 rounded-md shadow">
            <div className="grid md:grid-cols-2 items-center gap-[30px]">
              <div>
                <Image src={image} alt="image" />
              </div>
              <div>
                <div className="text-white p-4">
                  <h4 className="leading-normal text-4xl mb-3 font-semibold">
                    Get the job of your <br />
                    dreams quickly.
                  </h4>
                  <p className="text-white/70 text-lg max-w-xl">
                    Search all the open positions on the web. Get your own
                    personalized salary estimate. Read reviews on over 30000+
                    companies worldwide.
                  </p>
                  <ul className="text-white/50 mt-4">
                    <li className="mb-2 flex items-center">
                      <FaRegCheckCircle className="text-white text-xl me-2 h-[1em] w-[1em]" />
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaRegCheckCircle className="text-white text-xl me-2 h-[1em] w-[1em]" />
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaRegCheckCircle className="text-white text-xl me-2 h-[1em] w-[1em]" />
                      Create your own skin to match your brand
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto grid md:grid-cols-3 text-center py-[70px]">
        <div>
          <h5 className="text-[48px] font-semibold">1,548K+</h5>
          <p className="text-slate-400 text-[14px]">JOB FULFILLMENT</p>
        </div>
        <div>
          <h5 className="text-[48px] font-semibold">25+</h5>
          <p className="text-slate-400 text-[14px]">BRANCHES</p>
        </div>
        <div>
          <h5 className="text-[48px] font-semibold">9+</h5>
          <p className="text-slate-400 text-[14px]">YEARS EXPERIENCE</p>
        </div>
      </section>
      <section className="container mx-auto md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Questions & Answers
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto ">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {Questions.map((q)=>(
            <div className="flex" key={q.question}>
          <FaRegQuestionCircle className="h-[24px] w-[24px] text-emerald-600 me-3"/>
          <div className="flex-1">
            <h5 className="mb-2 text-lg font-semibold">{q.question}</h5>
            <p className="text-slate-400">{q.answer}</p>
          </div>
          </div>
        ))}
        </div>
      </section>
      <Explore/>
      <Footer />
    </main>
  );
}
