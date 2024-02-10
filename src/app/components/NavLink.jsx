"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={link.url}
      className={` p-1 ${
        pathName === link.url && "border-b border-[#141414] text-[#141414]"
      }`}
    >
      {link.title}
    </Link>
  );
}
