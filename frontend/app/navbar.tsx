"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [{ href: "/about", text: "About" }];

export const Navbar = () => {
  const path = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 15 } }}
      className="container mx-auto"
    >
      <nav className="navbar bg-yellow-100 text-gray-800 mb-5">
        <ul className="flex justify-center py-5  rounded-sm">
          {links.map((l: { href: string; text: string }) => {
            console.log(l.href);
            console.log(path);
            return (
              <li className="pr-[2.5rem]" key={l.href}>
                <motion.div>
                  <Link
                    className={`${
                      l.href === path ? "text-yellow-600 font-bold" : ""
                    } text-base`}
                    href={l.href}
                  >
                    {l.text}
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};
