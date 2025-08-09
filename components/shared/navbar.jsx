"use client";
import { useState } from "react";
import Logo from "../ui/logo";
import { NavLinkData } from "@/constants";
import NavLink from "../ui/navLink";
import { Button } from "../ui/button";
import { StretchHorizontal, X } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(!nav);

  const closeNav = () => setNav(false);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-lg:p-3">
        <Logo />
        <div className="flex md:order-2 space-x-3 max-lg:space-x-2 md:space-x-0 rtl:space-x-reverse">
          <Button size="lg">Get Started</Button>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={openNav}
          >
            {nav ? <X size="30" /> : <StretchHorizontal size="30" />}
          </button>
        </div>
        <div
          className={
            nav
              ? "items-center justify-between   w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavLinkData.map((item) => {
              return (
                <NavLink key={item.id} label={item.label} path={item.path} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
