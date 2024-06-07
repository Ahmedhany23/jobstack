import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import Hero from "./hero";


export default function jobCateories() {
  return (
   <div className="bg-[#f8fafc]">
      <NavBar />
      <Header title={'Job Categories'} path={'Job Categories'}/>
      <Hero/>
   </div>
     

  );
}
