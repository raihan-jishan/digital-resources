import Image from "next/image";
const HeroIlustration = ({ HeroImage }) => {
  return (
    <div className=" lg:mt-0 lg:col-span-5 lg:flex max-lg:flex-col-reverse mt-12 ">
      <Image src={HeroImage} alt="hero image not found!" />
    </div>
  );
};

export default HeroIlustration;
