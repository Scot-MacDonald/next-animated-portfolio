"use client";
import { motion } from "framer-motion";

export default function test() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="w-90 h-90 bg-red-400"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
        >
          hello
        </motion.div>
      </div>
    </>
  );
}
