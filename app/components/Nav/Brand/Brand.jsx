import { PiTree } from "react-icons/pi";
const Brand = () => {
  return (
    <div>
      <a
        href=""
        className=" items-center space-x-3 rtl:space-x-reverse "
      >
        <div className="text-purple-500 flex items-center justify-center">
          <PiTree size={45} />
        </div>
        <span className="text-xl self-center text-left  max-lg:text-sm font-semibold whitespace-nowrap dark:text-white">
          Digital resources
        </span>
      </a>
    </div>
  );
};

export default Brand;
