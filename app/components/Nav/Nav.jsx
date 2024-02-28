"use client";
import { Navdata } from "@/app/utils/constance";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import ActiveLink from "./ActiveLink";
import Brand from "./Brand/Brand";
const Nav = () => {
  usePathname();
  const [click, setClick] = useState();
  const handleClick = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(false);
  };
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Brand />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* connect button  */}
            <Button
              name={"connect"}
              style={"max-lg:text-sm w-full bg-purple-300 text-black rounded-full gap-0"}
              bgColor={"purple"}
              icon={<IoMdAdd size={20} />}
            />
            {/* clsoe */}
            <button
              type="button"
              className="inline-flex items-center p-2  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {click ? (
                <IoMdClose
                  size={35}
                  className="text-purple-400 "
                  onClick={handleClose}
                />
              ) : (
                <HiBars3BottomRight
                  size={35}
                  className="text-purple-400 "
                  onClick={handleClick}
                />
              )}
            </button>
          </div>
          <div
            className={
              click
                ? "items-center justify-between  w-full md:flex md:w-auto md:order-1  "
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   border-gray-100 rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {Navdata.map((data) => {
                return (
                  <li  key={data.id}>
                    <ActiveLink
                   
                      className=" block py-2 px-3 text-xl  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                      activeClasses="block py-2 px-3    max-lg:border-2 border-purple-600 text-2xl text-center font-bold rounded-3xl text-black md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-purple-500 max-lg:flex max-lg:gap-2 max-lg:justify-center max-lg:items-center"
                      text={data.name}
                      href={data.pathName}
                      activeIcon={data.activeIcon}
                      handleClose={handleClose}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
