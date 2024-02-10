"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-white">
        <motion.div
          className="h-screen w-screen fixed  bg-black"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="h-screen w-screen fixed z-40 bottom-0 bg-black"
          initial={{ height: "calc(100vh - 40px)" }}
          animate={{ height: "0vh", transition: { delay: 1 } }}
        />

        <div className="h-[cal(100vh-40px)] 8px-2">{children}</div>
      </div>
    </AnimatePresence>
  );
}
