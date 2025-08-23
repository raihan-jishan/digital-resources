import Section from "@/section/Section";
import {  HandshakeIcon } from "lucide-react"; 
import React from "react";

const AlwaysHelpYou = () => {
  return (
    <Section className={"mt-10 m-5"}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-[6rem] lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-[2.5rem] font-bold  leading-none md:text-5xl xl:text-6xl dark:text-white font-openSans tracking-tight  ">
            We are here to always{" "}
            <span className="flex items-center gap-4">
              {" "}
              help you <HandshakeIcon size={50} className="bg-green-400/10   " />
            </span>
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-[1rem] dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod quos, maxime ea doloribus quisquam voluptate
            exercitationem, nesciunt quidem quam temporibus adipisci eum
            facilis, maiores rem aliquam nobis ab repudiandae?
          </p>
          {/* <div className="flex gap-3 max-lg:flex-col">
            <Button variant="default" size="heroBtn">
              {item.btn1}
            </Button>
            <Button variant="default" size="heroBtn">
              {item.btn2}
            </Button>
          </div> */}
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={"assets/alwayshelp.svg"}
            width="600"
            height="300"
            alt="mockup"
            className="w-[90%]"
          />
        </div>
      </div>
    </Section>
  );
};

export default AlwaysHelpYou;
