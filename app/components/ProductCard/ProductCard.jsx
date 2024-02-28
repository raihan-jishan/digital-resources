import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { IoLinkOutline, IoReaderOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import Button from "../Button/Button";
const ProductCard = ({ imageUrl, name, description, githubLink, liveLink , additionalCss}) => {
  return (
    <div className="p-2  w-full max-lg:w-full">
      <div className="w-full bg-white border border-purple-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 mt-5">
        <a href="#">
          <Image
            className="rounded-2xl shadow-2xl"
            src={imageUrl}
            alt="product image not found!"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-center justify-between m-3" style={{display:additionalCss}}>
            <a href={githubLink} target="_blank">
              {" "}
              <VscGithub size={40} className="text-purple-400" />
            </a>
            <a href={liveLink} target="_blank">
              {" "}
              <IoLinkOutline size={40} className="text-purple-400" />
            </a>
            <IoIosMore size={40} className="text-purple-400" />
          </div>
          <Button
            name={"view more  products"}
            style={"rounded-full text-black text-xl bg-purple-400"}
            icon={<IoReaderOutline size={30} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
