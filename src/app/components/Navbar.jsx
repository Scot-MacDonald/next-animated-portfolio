"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-2 sm:px-4">
      <div className="font-semibold w-1/2">
        <Link href="/"></Link>Scot
      </div>
      <div className="hidden md:flex w-1/2 gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden">
        <button
          className="w-6 h-3 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col item-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
