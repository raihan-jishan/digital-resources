import Button from "@/app/components/Button/Button.jsx";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import SocialHandles from "../SocialHandles/SocialHandles";
const OurWorkCard = ({
  imageSrc,
  brandName,
  reviewCount,
  description,
  brandHandle,
  iconSize,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-10 max-lg:flex-col ">
        {/* image section  */}
        <div className="w-2/4 max-lg:w-full hover:scale-95 transition-all  cursor-pointer">
          <Image
            src={imageSrc}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={"work card image not found!"}
          />
        </div>
        {/* handles  */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            BRAND NAME
          </h2>
          <h1 className="text-gray-300 font-bold text-3xl title-font  mb-1">
            {brandName}
          </h1>
          <div className="flex mb-4 max-sm:flex-col max-sm:items-center max-sm:justify-center">
            <span className="flex items-center">
              <FaStar size={20} className="text-purple-400" />
              <FaStar size={20} className="text-purple-400" />
              <FaStar size={20} className="text-purple-400" />
              <FaStar size={20} className="text-purple-400" />
              <FaStarHalfAlt size={20} className="text-purple-400" />
              <span className="text-gray-300 ml-3 cursor-pointer hover:bg-gray-700 transition-all">
                {reviewCount} Reviews
              </span>
            </span>
            <SocialHandles
              brandHandle={brandHandle}
              iconSize={iconSize}
              className={
                "flex  ml-3 pl-3 py-2 border-l-2 border-gray-200 gap-5 space-x-2s max-sm:gap-6 "
              }
            />
          </div>
          <p className="leading-relaxed">{description}</p>

          <div className="flex">
            <div className="ml-auto mt-2">
              <Button
                bgColor={"purple"}
                style={"rounded-full bg-purple-400 text-black"}
                name={"build a project"}
                icon={<IoAddOutline size={30} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkCard;
