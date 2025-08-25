import Section from "@/section/Section";
import { Heading } from "./ui/heading";
import { SpecialityCardData } from "@/constants/data";
import { SpecialityCard } from "./ui/card";
import GridSection from "@/section/GridSection";
const Speciality = () => {
  return (
    <Section className={" overflow-x-hidden"}>
      <Heading
        title={"What is the Speciality of Us?"}
        customWidth={"max-w-[50%] max-lg:max-w-full"}
      />
      <GridSection varient={"speciality"}>
        {SpecialityCardData.map((item) => {
          return (
            <SpecialityCard
              key={item.id}
              image={item.imageUrl}
              label={item.label}
              className={item.style}
              description={item.description}
            />
          );
        })}
      </GridSection>
    </Section>
  );
};

export default Speciality;
