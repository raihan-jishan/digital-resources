import { Animation } from "@/global/animation";
import { FaPencilRuler } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import HeroImage from "../public/images/heroImage.svg";
import { PrimaryBtn } from "./ui";
import HeroIlustration from "./ui/heroIlustration";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-10  ">
      <Animation>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
          <div className="mr-auto place-self-center lg:col-span-7 max-lg:mt-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-secondary">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              ab. Nihil tempor
            </p>
            <div className="inline-flex gap-5 items-center justify-center max-lg:flex-col max-lg:w-full ">
              <PrimaryBtn
                text={"Get started"}
                path={"/"}
                pyFull
                pxFull
                varientHero
                icon={<FaPencilRuler size={22} />}
              />
              <PrimaryBtn
                text={"watch video"}
                path={"/"}
                pyFull
                pxFull
                varientHero
                icon={<IoVideocamOutline size={22} />}
              />
            </div>
          </div>
          <HeroIlustration heroImage={HeroImage} />
        </div>
      </Animation>
    </section>
  );
};

export default Hero;
