"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export default function Homepage() {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  return (
    <div className="">
      <div className="h-[50vh] bg-[#141414]">Hello World</div>
      <div className="flex">
        <div className="flex w-1/2">
          <div className="w-1/3 flex justify-center items-center">
            external worlds
          </div>
          <div className="w-1/3 flex justify-center items-center text-[#92908d] transition-all">
            github
          </div>
          <div className="w-1/3 flex justify-center items-center">01</div>
        </div>
        <div className="text-xl w-1/2 flex w-fill h-[50vh]">
          <div className="w-1/3 border-l border-r border-black text-sm">
            <div
              className={`text-xl h-1/3 border-b border-black flex justify-center items-center transition-all ${
                hoveredDiv === 1 ? "bg-[#141414] text-white" : ""
              }`}
              onMouseEnter={() => setHoveredDiv(1)}
              onMouseLeave={() => setHoveredDiv(null)}
            >
              01
            </div>
            <div
              className={`text-xl h-1/3 border-b border-black flex justify-center items-center transition-all ${
                hoveredDiv === 2 ? "bg-[#141414] text-white" : ""
              }`}
              onMouseEnter={() => setHoveredDiv(2)}
              onMouseLeave={() => setHoveredDiv(null)}
            >
              02
            </div>
            <div
              className={`text-xl h-1/3 flex justify-center items-center transition-all ${
                hoveredDiv === 3 ? "bg-[#141414] text-white" : ""
              }`}
              onMouseEnter={() => setHoveredDiv(3)}
              onMouseLeave={() => setHoveredDiv(null)}
            >
              03
            </div>
          </div>
          <div className="w-2/3 flex justify-center items-center">
            {hoveredDiv === 1 && (
              <Image src="/tp.svg" alt="Image 1" width={300} height={300} />
            )}
            {hoveredDiv === 2 && (
              <Image src="/edkimo.svg" alt="Image 2" width={300} height={300} />
            )}
            {hoveredDiv === 3 && (
              <Image src="/Group.svg" alt="Image 3" width={300} height={300} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
