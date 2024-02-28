
const ServiceCard = ({ icon,  ServiceName }) => {
  return (
    <div className="p-4  w-full max-lg:w-full ">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center hover:bg-gray-800 hover:border-gray-400  hover:scale-95 cursor-pointer transition-all">
      <div className="flex items-center justify-center  text-purple-400 animate-bounce delay-300 ">
      {icon}
      </div>
        <p className="leading-relaxed text-3xl font-extrabold mt-3">{ServiceName}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
