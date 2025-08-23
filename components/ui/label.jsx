const Label = ({ label, htmlFor, icon }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="  text-sm font-semibold text-gray-900 dark:text-gray-300 mb-1 flex gap-2 items-center"
    >
    {icon}  {label}
    </label>
  );
};

export default Label;
