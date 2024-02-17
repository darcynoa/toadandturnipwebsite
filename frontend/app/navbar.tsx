"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface navLink {
  href: string;
  text: string;
}

const links = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

export const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="text-gray-800 mb-5 flex justify-between px-[2rem] md:px-[5.1875rem] py-[1.06rem] md:gap-[7.5rem]">
      <Image
        src={"/menu.svg"}
        alt={"The Mobile Menu button, cool eh?"}
        width={34}
        height={34}
        className="lg:hidden"
      />
      <Link href={"/"} className="md:mr-auto lg:mr-0">
        <Image
          src={"/tnt-logo.svg"}
          alt={"The Toad and Turnip Logo in SVG"}
          width={100}
          height={80}
        />
      </Link>
      <ul className="hidden lg:flex justify-center items-center">
        {links.map((l: navLink) => {
          return (
            <li className="pr-[2.5rem]" key={l.href}>
              <Link className={`font-sans`} href={l.href}>
                {l.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <Image
        src={"/bag.svg"}
        alt={"Your shopping bag, because the shopping cart is too overused"}
        width={38}
        height={38}
        className="hover:cursor-pointer"
      />
    </nav>
  );
};
