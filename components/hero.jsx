import { Button } from "./ui/button";
import Section from "@/section/Section";

const Hero = ({ item }) => {
  return (
    <Section className={"mt-10"}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-[6rem] lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-[2.5rem] font-extrabold  leading-none md:text-5xl xl:text-6xl dark:text-white font-openSans tracking-tight">
            {item.title}
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-[1rem] dark:text-gray-400">
            {item.description}
          </p>
          <div className="flex gap-3 max-lg:flex-col">
            <Button variant="default" size="heroBtn">
              {item.btn1}
            </Button>
            <Button variant="default" size="heroBtn">
              {item.btn2}
            </Button>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={item.image}
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

export default Hero;
