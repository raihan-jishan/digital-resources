
import { FiTool } from "react-icons/fi";
import OurWorkCard from "../components/OurWorkCard/OurWorkCard";
import { OurWorksData } from "../utils/constance";

const Ourwors = () => {
  return (
    <section className="text-gray-100 body-font bg-gray-900">
      <div className="container px-5 py-28 mx-auto">
        <div className="flex flex-col text-center w-full mb-15">
          <h1 className=" text-4xl font-bold tracking-wider title-font mb-4 text-white items-center justify-center flex gap-2 text-center max-lg:text-3xl">
            <span className="text-purple-400 border-b-2  border-purple-400  ">
              {" "}
              ourwork{" "}
            </span>{" "}
            details <FiTool size={40} className="text-purple-400" />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque
            illum debitis nihil praesentium quasi porro tempore voluptate est
            obcaecati delectus repellat quod nemo velit temporibus sunt dolorem
            neque consequuntur!
          </p>
        </div>
        {OurWorksData.map((data )=> {
          return (
            <OurWorkCard 
            imageSrc={data.imageUrl}
            brandName={data.brandName}  
            description={data.description}
            reviewCount={data.reviewCount}
            brandHandle={data.socialHandle}
            iconSize={data.iconSize}
            />
          )
        })}
        
      </div>
    </section>
  );
};

export default Ourwors;
