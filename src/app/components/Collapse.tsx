"use client";
import { useState } from "react";
//icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
export default function Collapse(props:{question:string,answer:string}) {
    const [show, setShow] = useState(false)
  return (
    <div className="relative shadow rounded-md overflow-hidden mt-4">
      <h2 className={`text-base font-medium ${show?"text-emerald-600":"bg-white"} `}>
        <button
            onClick={()=>setShow(!show)}
          type="button"
          className="flex  justify-between items-center p-5 w-full text-left"
        >
          <span>{props.question}</span>
          {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </h2>
      {show && <div className="p-5 bg-white">
        <p className="text-slate-400">
            {props.answer}
        </p>
      </div>}
      
    </div>
  );
}
