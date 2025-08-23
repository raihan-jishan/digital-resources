import { WorkCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { WorksData } from "@/constants/data";
import Section from "@/section/Section";
import React from "react";

const OurWorks = () => {
  return (
    <Section className={"mt-28 p-10 max-lg:p-2"}>
      <Heading
        title={"Our works"}
        fontOpenSans
        description={
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quo mollitia? Molestiae dicta dolore provident."
        }
      />

      <div className="grid grid-cols-3 gap-10  p-8 max-lg:grid-cols-1 max-lg:gap-5 max-lg:p-0">
        {WorksData.map((item) => {
          return (
            <WorkCard
              key={item.id}
              label={item.label}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default OurWorks;
