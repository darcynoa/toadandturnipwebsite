"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [menu, setMenu] = useState(false);

  const path = usePathname();
  return (
    <nav className="text-gray-800 mb-5 flex justify-between px-[2rem] md:px-[5.1875rem] py-[1.06rem] md:gap-[7.5rem]">
      <Image
        src={"/icons/menu.svg"}
        alt={"The Mobile Menu button, cool eh?"}
        width={34}
        height={34}
        className="lg:hidden"
        onClick={() => {
          setMenu(true);
        }}
      />
      <Link href={"/"} className="md:mr-auto lg:mr-0">
        <Image
          src={"/tnt-logo.svg"}
          alt={"The Toad and Turnip Logo in SVG"}
          width={100}
          height={80}
        />
      </Link>

      <ul
        className={`absolute top-0 ${
          menu ? "left-0" : "-left-full"
        } pt-[2rem] pl-[2rem] flex flex-col gap-[8rem] bg-white w-screen h-screen text-[2.5rem] lg:flex-row lg:text-base lg:relative lg:w-auto lg:h-auto lg:gap-0 lg:items-center`}
      >
        <Image
          src={"/icons/close.svg"}
          alt={"Closing icon for closing menus and popups"}
          width={13}
          height={13}
          className={" pt-[1rem] lg:hidden"}
          onClick={() => {
            setMenu(false);
          }}
        />
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
        src={"/icons/bag.svg"}
        alt={"Your shopping bag, because the shopping cart is too overused"}
        width={38}
        height={38}
        className="hover:cursor-pointer"
      />
      {menu && (
        <>
          <div className="absolute top-[4.5rem] right-[6rem] bg-green w-[28px] h-[28px] rounded-full lg:hidden"></div>
          <Image
            src={"/toads/toad-on-a-turnip.png"}
            alt={"It's a toad on a turnip!"}
            width={1080}
            height={1145}
            className={
              "absolute bottom-[5rem] right-[2rem] w-[25%] -scale-x-100 lg:hidden after:block after:w-[5rem] after:h-[5rem] after:rounded-full after:z-50 after:bg-yellow"
            }
          />
        </>
      )}
    </nav>
  );
};
