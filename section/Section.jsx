const Section = ({ id ,children, className, customBg }) => {
  return (
    <div
    id={id}
      className={`${
        customBg ? customBg : "bg-white dark:bg-gray-900"
      }  ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
