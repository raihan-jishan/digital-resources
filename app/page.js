import AlwaysHelpYou from "@/components/AlwaysHelpYou";
import Hero from "@/components/Hero";
import LetGetTouch from "@/components/LetGetTouch";
import OurClients from "@/components/OurClients";
import Review from "@/components/Review";
import Speciality from "@/components/Speciality";
import WhatWeProvide from "@/components/WhatWeProvide";
import { HeroData } from "@/constants/data";

export default function Home() {
  return (
    <div>
      {HeroData.map((item) => {
        return <Hero key={item.id} item={item} />;
      })}
      <WhatWeProvide />
      <AlwaysHelpYou />
      <Speciality />
      <OurClients />
      <Review />
      <LetGetTouch /> 
    </div>
  );
}
