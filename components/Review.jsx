import Section from "@/section/Section";
import React from "react";
import { Heading } from "./ui/heading";
import { ReviewData } from "@/constants/data";
import { ReviewCard } from "./ui/card";
import GridSection from "@/section/GridSection";

const Review = () => {
  return (
    <Section className={"mt-16"} customBg={"bg-[#f6f6f6]/50"}>
      <Heading title={"What Our Client Says "} fontOpenSans />

      <GridSection varient={'reviews'}>
        {ReviewData.map((item, index) => {
          return (
            <ReviewCard
              key={index}
              name={item.name}
              review={item.review}
              imageUrl={item.image}
              twitterHandel={item.twitter}
            />
          );
        })}
      </GridSection>
    </Section>
  );
};

export default Review;
