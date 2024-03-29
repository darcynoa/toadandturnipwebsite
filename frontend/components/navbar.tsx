"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useMousePosition from "../utils/useMousePosition";
import useWindowSize from "../utils/useWindowSize";
import { motion, AnimatePresence } from "framer-motion";

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
  // Menu state that determines whether the menu is open (true) or closed (false)
  const [menu, setMenu] = useState(false);

  // An array that holds the state of each link when hovered
  // Links are determined by the index of the array which is automatically generated by adding a link into the links object
  const [navLinkArrayHoverState, setNavLinkArrayHoverState] = useState(
    Array.from(links.values(), (v) => {
      return false;
    })
  );

  const { x, y } = useMousePosition();
  const screenWidth = useWindowSize();

  // Variants used for the unordered list that transforms into the mobile navigation
  const mobileNavMenuVariants = {
    initial: {
      x: screenWidth >= 1024 ? "0vw" : "-130vw",
    },
    open: {
      x: screenWidth < 768 ? -32 : -90,
      transition: {
        ease: [0.9, 0.03, 0.14, 0.96],
        duration: 0.45,
      },
    },
    close: {
      x: screenWidth >= 1024 ? "0vw" : "-120vw",
      transition: {
        ease: [0.69, 0.05, 0.13, 0.98],
        duration: 0.75,
      },
    },
  };

  // Variants of animation used for the extra assets within the mobile navigation
  const mobileNavMenuExtraVariants = {
    greenInitial: {
      x: "110vw",
      y: "-10vh",
    },
    greenOpen: {
      x: -40,
      y: 20,
      transition: { duration: 0.7, delay: 0.4, ease: [0.38, 0.14, 0.1, 0.96] },
    },
    greenClose: {
      x: "-125vw",
      y: -20,
      transition: {
        duration: 0.7,
        ease: [0.69, 0.05, 0.13, 0.98],
      },
    },
    imageInitial: {
      x: "110vw",
      y: "130vh",
    },
    imageOpen: {
      x: 30,
      y: "96vh",
      transition: { duration: 0.7, delay: 0.4, ease: [0.38, 0.14, 0.1, 0.96] },
    },
    imageClose: {
      x: "-125vw",
      y: "98vh",
      rotate: -100,
      transition: {
        duration: 0.7,
        ease: [0.69, 0.05, 0.13, 0.98],
      },
    },
    yellowInitial: {
      x: "140vw",
      y: "50vh",
    },
    yellowOpen: {
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay: 0.4, ease: [0.38, 0.14, 0.1, 0.96] },
    },
    yellowClose: {
      x: "-145vw",
      y: 5,
      transition: {
        duration: 0.7,
        ease: [0.69, 0.05, 0.13, 0.98],
      },
    },
  };

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

      <motion.ul
        variants={mobileNavMenuVariants}
        initial="initial"
        animate={menu ? "open" : "close"}
        className={`absolute top-0 pt-[2rem] pl-[2rem] pb-[6rem] flex flex-col justify-between bg-white w-screen h-screen text-[2.5rem] lg:py-[2rem] lg:px-[4rem] lg:gap-[2.5rem] lg:text-center lg:flex-row lg:text-base lg:static lg:w-auto lg:h-auto lg:items-center lg:translate-x-0`}
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
        {links.map((l: navLink, i: number) => {
          return (
            <motion.li
              onHoverStart={() => {
                setNavLinkArrayHoverState(
                  navLinkArrayHoverState.map((state, index) =>
                    index === i ? true : false
                  )
                );
              }}
              onHoverEnd={() => {
                setNavLinkArrayHoverState(
                  navLinkArrayHoverState.map((state, index) =>
                    index === i ? false : false
                  )
                );
              }}
              key={l.href}
            >
              <Link
                className={`nav__list__item__link--${i} font-sans`}
                href={l.href}
              >
                {l.text}
                {/* The bubble used to highlight the link as hovered */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={
                    navLinkArrayHoverState[i]
                      ? {
                          scale: 1,
                          // cursor: "none",
                          transition: { type: "tween", ease: "backOut" },
                        }
                      : {
                          scale: 0,
                        }
                  }
                  transition={{
                    ease: [0.5, 0.12, 0.38, 0.99],
                    duration: 0.5,
                  }}
                  className="hidden z-20 w-[3rem] h-[3rem] absolute top-[20%] ml-[1%] scale-0 origin-center rounded-full bg-white mix-blend-exclusion lg:block"
                ></motion.div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <Image
        src={"/icons/bag.svg"}
        alt={"Your shopping bag, because the shopping cart is too overused"}
        width={38}
        height={38}
        className="hover:cursor-pointer"
      />
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              variants={mobileNavMenuExtraVariants}
              initial="greenInitial"
              animate="greenOpen"
              exit="greenClose"
              key="navBarGreenCircle"
              className="absolute top-[4.5rem] right-[6rem] bg-green w-[28px] h-[28px] rounded-full md:w-[3rem] md:h-[3rem] lg:hidden"
            ></motion.div>
            <motion.div
              initial="imageInitial"
              animate="imageOpen"
              exit="imageClose"
              key={"navBarImageContainer"}
              variants={mobileNavMenuExtraVariants}
              className="absolute top-[2rem] right-[2rem] z-10 w-[10rem]"
            >
              <Image
                src={"/toads/toad-on-a-turnip.png"}
                alt={"It's a toad on a turnip!"}
                width={1080}
                height={1145}
                className={
                  "absolute bottom-[5rem] right-[12rem] w-[10rem] -scale-x-100 origin-bottom-right lg:hidden"
                }
              />
            </motion.div>
            <motion.div
              initial="yellowInitial"
              animate="yellowOpen"
              exit="yellowClose"
              key={"navBarYellowCircle"}
              variants={mobileNavMenuExtraVariants}
              className="absolute bottom-[4rem] right-[2rem] bg-yellow w-[7rem] h-[7rem] rounded-full lg:hidden"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
