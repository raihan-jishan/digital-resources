import { Animation } from "@/global/animation";
import Image from "next/image";
const HeroIlustration = ({ heroImage }) => {
  return (
    <Animation className={" lg:mt-0 lg:col-span-5 lg:flex max-lg:mt-5"}>
      <Image src={heroImage} alt="mockup" />
    </Animation>
  );
};

export default HeroIlustration;
