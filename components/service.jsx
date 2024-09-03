import { featureCard as FeatureCard } from "@/components/ui/card";
import { serviceData } from "@/constants";
import { Animation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import Heading from "./ui/heading";

const Service = () => {
  return (
    <section
      className={"bg-white dark:bg-gray-900 text-black dark:text-white mt-5"} id="service"
    >
      <Animation>
        <Heading
          title={"service"}
          textSmall
          borderSide
          description={"what kind of service  we offer our customers"}
          paragraph={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint tenetur  "
          }
        />

        <Wrapper>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900 ">
              {serviceData.map((item, index) => {
                return (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.info}
                    icon={item.icon}
                    boxShadow
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

export default Service;
