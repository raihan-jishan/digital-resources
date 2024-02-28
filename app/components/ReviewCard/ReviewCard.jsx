import Image from "next/image";
import { FaStar } from "react-icons/fa";
const ReviewCard = ({personImage, review,name,description}) => {
  return (
    <div>
      <div className="p-2  w-full max-lg:w-full">
        <div className="w-full bg-white border border-purple-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 hover:scale-95 transition-all hover:bg-gray-900 hover:border-2 hover:border-purple-300 ">
          <a href="#" className="flex gap-3 m-2">
            <Image
              className="rounded-full shadow-2xl"
              src={
                personImage
              }
              alt="review card not found!"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25%", height: "auto" }}
            />
            <h5 className=" text-3xl font-bold capitalize tracking-tight text-gray-300 text-center">
             {name}
            </h5>
            {/* star's   */}
            <span className="flex items-center justify-center bg-purple-300 h-8 w-20 text-black text-2xl rounded-2xl font-bold">
              {review}<FaStar size={15} />
            </span>
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
