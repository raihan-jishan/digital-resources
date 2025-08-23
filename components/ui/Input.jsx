import Label from "./label";

const Input = ({ label, htmlFor, inputType, inputId , placeholder,icon}) => {
  return (
    <div>
      <Label label={label} htmlFor={htmlFor} icon={icon}/>
      <input
        type={inputType}
        id={inputId}
        className="w-full p-3 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-gray-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
