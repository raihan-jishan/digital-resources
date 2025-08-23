import Section from "@/section/Section";
import React from "react";
import { Heading } from "./ui/heading";
import { ReviewData } from "@/constants/data";
import { ReviewCard } from "./ui/card";

const Review = () => {
  return (
    <Section className={"mt-16"} customBg={"bg-[#f6f6f6]/50"}>
      <Heading title={"What Our Client Says "} fontOpenSans />

      <div className="grid grid-cols-3 p-14 gap-16 max-lg:grid-cols-1 max-lg:p-2">
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
      </div>
    </Section>
  );
};

export default Review;
