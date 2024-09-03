"use client";
import { navLinks } from "@/constants";
import { Animation } from "@/global/animation";
import Link from "next/link";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";
import { Logo, PrimaryBtn } from "./ui";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  // openNav function
  const openNav = () => setNav(!nav);
  // closeNav function
  const closeNav = () => setNav(false);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Animation>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <PrimaryBtn
              text={"Contact"}
              path={"/#contact"}
              icon={<RiContactsLine size={25} />}
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              {nav ? (
                <AiOutlineClose size={30} onClick={closeNav} />
              ) : (
                <HiBars3CenterLeft size={30} onClick={openNav} />
              )}
            </button>
          </div>
          <div
            className={
              nav
                ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:text-white text-black capitalize dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 transition-all ">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.pathName}
                      className="block py-2 px-3 capitalize    rounded md:bg-transparent hover:text-gray-500 hover:font-semibold   md:p-0    "
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Animation>
    </nav>
  );
};

export default Navbar;
