const GridSection = ({ children, varient, className }) => {
  return (
    <div
      className={`${
        varient === "primary"
          ? "grid grid-cols-3 m-10 p-6  gap-5 max-lg:grid-cols-1 max-lg:m-0  "
          : varient === "speciality"
          ? "grid grid-cols-3 gap-10 w-full m-8 p-14 auto-rows-fr  max-lg:grid-cols-1 max-lg:p-0 max-lg:m-0 max-lg:gap-3"
          : varient === "clients"
          ? "grid grid-cols-4  ml-[10rem] p-12 max-lg:ml-0 max-lg:p-5"
          : varient === "reviews"
          ? "grid grid-cols-3 p-14 gap-16 max-lg:grid-cols-1 max-lg:p-2"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GridSection;
