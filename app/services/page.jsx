import { SiCountingworkspro } from "react-icons/si";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { serviceData } from "../utils/constance";
const Service = () => {
  return (
    <div>
      <section className="text-gray-100 body-font bg-gray-900">
        <div className="container px-5 py-28 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-4xl font-bold tracking-wider title-font mb-4 text-white items-center justify-center flex gap-2 text-center">
              <span className="text-purple-500 underline">Our</span> services{" "}
              <SiCountingworkspro size={40} className="text-purple-300" />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              atque illum debitis nihil praesentium quasi porro tempore
              voluptate est obcaecati delectus repellat quod nemo velit
              temporibus sunt dolorem neque consequuntur!
            </p>
          </div>
          <div
            className="  grid grid-cols-3  max-lg:grid-cols-1
            max-lg:flex-wrap max-lg:-m-4 max-lg:gap-0 text-center "
          >
            {serviceData.map((data) => {
              return (
                <ServiceCard
                  key={data.id}
                  icon={data.icon}
                  ServiceName={data.serviceName}
                  text={data.text}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
