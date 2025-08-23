import Label from "./label";

const Textarea = ({label, id, row, placeholder, icon}) => {
  return (
    <div>
      <Label label={label} icon={icon} />
      <textarea
        id={id}
        rows={row}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 text-sm dark:bg-gray-700 dark:border-gray-500 dark:text-white"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
