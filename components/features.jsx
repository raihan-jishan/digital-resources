import { featureCard as FeatureCard } from "@/components/ui/card";
import { featuresData } from "@/constants";
import { Animation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import Heading from "./ui/heading";
const Features = () => {
  return (
    <section
      className={"bg-white dark:bg-gray-900 text-black dark:text-white mt-5"}
    >
      <Animation>
        <Heading
          title={"features"}
          textSmall
          borderSide
          description={"what we are offer you to grow your bussiness"}
          paragraph={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint tenetur  "
          }
        />

        <Wrapper>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 dark:divide-gray-900 dark:first:border-l-2 dark:lg:first:border-none dark:first:border-gray-900 ">
              {featuresData.map((item, index) => {
                return (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.info}
                    icon={item.icon}
                    boxShadowMid
                  />
                );
              })}
            </div>
          </div>
        </Wrapper>
      </Animation>
    </section>
  );
};

export default Features;
