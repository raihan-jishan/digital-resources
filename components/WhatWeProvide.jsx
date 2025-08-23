import { GlobeLock, Workflow } from "lucide-react";
import { ProvideCard } from "./ui/card";
import { Heading } from "./ui/heading";
import { WhatWeProvideData } from "@/constants/data";
import Section from "@/section/Section";

const WhatWeProvide = () => {
  return (
    <Section customBg={'bg-[#f6f6f6]/50'} id={'services'}>
      <Heading
        title={"What We Provide"}
        description={
          "We deliver tailored services and solutions with a focus on quality, reliability, and value."
        }
      />
      <div className="grid grid-cols-3 m-10 p-6  gap-5 max-lg:grid-cols-1 max-lg:m-0  ">
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
      </div>
    </Section>
  );
};

export default WhatWeProvide;
