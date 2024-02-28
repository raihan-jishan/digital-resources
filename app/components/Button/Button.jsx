const Button = ({ name, style, icon, bgColor }) => {
  return (
    <div>
      <button
        type="button"
        className={`transition-all w-full  bg-${bgColor}-700 hover:bg-${bgColor}-800
        focus:ring-${bgColor}-300
        dark:bg-${bgColor}-600 items-center justify-center
        dark:hover:bg-${bgColor}-700 dark:focus:ring-${bgColor}-800  focus:ring-4 focus:outline-none  font-bold  capitalize  px-4 py-2 text-center hover:scale-95 flex gap-5 m-0, ${style}`}
      >
        {name} {icon}
      </button>
    </div>
  );
};

export default Button;
