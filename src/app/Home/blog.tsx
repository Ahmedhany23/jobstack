import Image from "next/image"
import Link from "next/link"
//icons
import { BsArrowRight } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
//images
import clients from "@/app/assets/Home/blog/clients.webp"

import breaks from "@/app/assets/Home/blog/break.webp";

import work from "@/app/assets/Home/blog/work.webp";

const blogs = [
    {id:1,img:clients,type:'arts',name:'Google',title:"11 Tips to Help You Get New Clients Through Cold Calling"},
    {id:2,img:breaks,type:'Illustration',name:'Facebook',title:"DigitalOcean launches first Canadian data centre in Toronto"},
    {id:3,img:work,type:'Music',name:'Linkedin',title:"Using Banner Stands To Increase Trade Show Traffic"},
]

export default function Blog() {
  return (
    <article className="py-[50px]">
        <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Latest Blog or News</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {blogs.map((b,i)=>{
                    return( <div key={i} className="group relative overflow-hidden bg-white rounded-md shadow">
                    <div className="relative overflow-hidden">
                        <Image src={b.img} alt="image" className="scale-110 group-hover:scale-100 transition-all duration-500"/>
                    </div>
                    <div className="p-6 relative">
                        <div className="absolute start-6 -top-4">
                        <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{b.type}</span>
                        </div>
                        <div>
                           <div className="flex mb-4">
                           <span className="text-slate-400 text-sm flex items-center">
                            <LuCalendarDays/> 20thFebruary, 2023
                           </span>
                           <span className="text-slate-400 text-sm ms-3 flex items-center"><CiClock2/>5 min read</span>
                            </div> 
                            <Link href={`/blog-detail/${b.id}`} className="text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">{b.title}</Link>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                        <Link className="text-[15px] font-semibold hover:text-emerald-600 flex items-center" href={`/blog-detail/${b.id}`}>Read More <BsArrowRight /></Link>
                        <span className="text-slate-400 text-sm">
                            by
                            <p className="text-slate-900 hover:text-emerald-600 font-medium">{b.name}</p>
                        </span>
                        </div>
                    </div>
                </div>);
                })}
               
            </div>
        </div>
    </article>
  )
}
