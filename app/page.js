import AlwaysHelpYou from "@/components/AlwaysHelpYou";
import Hero from "@/components/Home";
import LetGetTouch from "@/components/LetGetTouch";
import OurClients from "@/components/OurClients";
import Review from "@/components/Review";
import Speciality from "@/components/Speciality";
import WhatWeProvide from "@/components/WhatWeProvide";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeProvide />
      <AlwaysHelpYou />
      <Speciality />
      <OurClients />
      <Review />
      <LetGetTouch />
    </div>
  );
}
