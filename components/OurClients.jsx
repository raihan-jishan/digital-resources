import Section from "@/section/Section";
import React from "react";
import { Heading } from "./ui/heading";
import { CompanyLogo } from "./ui/card";
import { Slack } from "lucide-react";
import { CompanyLogoData } from "@/constants/data";
import GridSection from "@/section/GridSection";

const OurClients = () => {
  return (
    <Section className={"mt-12"}>
      <Heading
        title={"Our Client's"}
        description={
          "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corporis beatae qui quae est pariatur."
        }
      />
      <GridSection varient={"clients"}>
        {CompanyLogoData.map((item) => {
          return <CompanyLogo key={item.id} icon={item.icon} />;
        })}
      </GridSection>
    </Section>
  );
};

export default OurClients;
