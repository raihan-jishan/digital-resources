import Section from "@/section/Section";
import React from "react";
import { Heading } from "./ui/heading";
import { SpecialityCardData } from "@/constants/data";
import { SpecialityCard } from "./ui/card";
const Speciality = () => {
  return (
    <Section className={" overflow-x-hidden"}>
      <Heading
        title={"What is the Speciality of Us?"}
        customWidth={"max-w-[50%] max-lg:max-w-full"}
      />
      <div className="grid grid-cols-3 gap-10 w-full m-8 p-14 auto-rows-fr  max-lg:grid-cols-1 max-lg:p-0 max-lg:m-0 max-lg:gap-3">
        {SpecialityCardData.map((item) => {
          return (
            <SpecialityCard
              image={item.imageUrl}
              label={item.label}
              className={item.style}
              description={item.description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Speciality;
