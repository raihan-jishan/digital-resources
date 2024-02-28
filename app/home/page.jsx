import Button from "@/app/components/Button/Button.jsx";
import HeroIlustration from "@/app/components/Ilustrations/HeroIlustration.jsx";
import { HeroData } from "@/app/utils/constance.js";
import { FaPencilAlt } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="">
      <section className="bg-white dark:bg-gray-900 ">
        {HeroData.map((data) => {
          return (
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 " key={data.id}>
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  <span className="text-purple-500 text-4xl">
                    {data.heroTitle}
                  </span>
                  {data.heroSubTitle}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-comforta">
                  {data.heroDescription}
                </p>
                <div className="flex gap-2 max-lg:flex-col">
                  <Button
                    name={data.firstBtnTitle}
                    style={"text-2xl bg-purple-300 rounded-full "}
                    bgColor={"purple"}
                    icon={<FaPencilAlt size={25} />}
                  />
                  <Button
                    name={data.secondBtnTitle}
                    style={
                      "text-2xl max-lg:mt-4 rounded-xl border-2 border-purple-600 text-white"
                    }
                    icon={<FaBookBookmark size={25} />}
                  />
                </div>
              </div>
              <HeroIlustration HeroImage={data.Image} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
