 
import GridSection from "@/section/GridSection";
import { ProvideCard } from "./ui/card";
import { Heading } from "./ui/heading";
import { WhatWeProvideData } from "@/constants/data";
import Section from "@/section/Section";

const WhatWeProvide = () => {
  return (
    <Section customBg={"bg-[#f6f6f6]/50"} id={"services"}>
      <Heading
        title={"What We Provide"}
        description={
          "We deliver tailored services and solutions with a focus on quality, reliability, and value."
        }
      />
      <GridSection varient={'primary'}>
        {WhatWeProvideData.map((item) => {
          return (
            <ProvideCard
              key={item.id}
              label={item.label}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </GridSection>
    </Section>
  );
};

export default WhatWeProvide;
