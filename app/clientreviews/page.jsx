import { TfiCommentAlt } from "react-icons/tfi";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { ReviewData } from "../utils/constance";
const clientreviews = () => {
  return (
    <section className="text-gray-100 body-font bg-gray-900">
      <div className="container px-5 py-28 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" text-4xl font-bold tracking-wider title-font mb-4 text-white items-center justify-center flex gap-2 text-center">
            <span className="text-purple-500 underline">Client </span> Reviews{" "}
            <TfiCommentAlt size={50} className="text-purple-300" />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque
            illum debitis nihil praesentium quasi porro tempore voluptate est
            obcaecati delectus repellat quod nemo velit temporibus sunt dolorem
            neque consequuntur!
          </p>
        </div>
        <div
          className=" gap-8 grid grid-cols-3  max-lg:grid-cols-1
      max-lg:flex-wrap max-lg:-m-4 max-lg:gap-0 text-center "
        >
          {ReviewData.map((data) => {
            return (
              <ReviewCard
                personImage={data.personImage}
                review={data.reviewStar}
                name={data.name}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default clientreviews;
