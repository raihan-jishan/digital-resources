export const Input = ({type, placeholderText}) => {
  return (
    <input
      type={type}
      placeholder={placeholderText}
      className="w-full text-gray-900 rounded-md py-2.5 px-4 border text-sm outline-secbg-secondary"
    />
  );
};
