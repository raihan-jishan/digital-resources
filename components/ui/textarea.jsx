export const TextArea = ({ text, rows }) => {
  return (
    <textarea
      placeholder={text}
      rows={rows}
      className="w-full text-gray-900 dark:bg-gray-900
    border dark:border-secondary/50 dark:shadow-2xl
    dark:shadow-secondary/40   rounded-md px-4   text-sm pt-2.5 outline-secbg-secondary"
    ></textarea>
  );
};
