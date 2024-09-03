export const Input = ({type, placeholderText}) => {
  return (
    <input
      type={type}
      placeholder={placeholderText}
      className="w-full text-gray-900 dark:bg-gray-900 rounded-lg py-2.5 px-4 border dark:border-secondary/50 dark:shadow-2xl dark:shadow-secondary/40 dark:text-white  text-sm outline-black"
    />
  );
};
