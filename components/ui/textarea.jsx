export const TextArea = ({ text , rows}) => {
  return (
    <textarea
      placeholder={text}
      rows={rows}
      className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-secbg-secondary"
    ></textarea>
  );
};
