import { footerIcons, footerLinks } from "@/constants";
import { it } from "node:test";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-openSans dark:text-white">
                Digital Resources
              </span>
            </a>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-12 sm:grid-cols-4 max-lg:grid-cols-2">
              {footerLinks.map((item, index) => (
                <div key={index}>
                  <h2 className="mb-6    text-gray-900 uppercase dark:text-white font-openSans tracking-wide font-semibold">
                    {item.title}
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-4">
                        <a href={link.href || "#"} className="hover:underline">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-900 sm:text-center ">
            © {new Date().getFullYear()}
            <a href="https://flowbite.com/" className="hover:underline">
              Digital Resources
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-4 sm:justify-center sm:mt-0">
            {footerIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.icon}
                  <span className="sr-only">Facebook page</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
