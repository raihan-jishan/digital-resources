export const Heading = ({ title, description, customWidth ,fontOpenSans}) => {
  return (
    <div className="text-center">
      <div
        className={`${
          customWidth ? customWidth : ""
        } m-auto flex flex-col items-center justify-center mt-2`}
      >
        <h2
          className={`
        text-[2.5rem] leading-[2.7rem]
        font-semibold
        
             text-gray-900 dark:text-gray-400 
        relative
        after:content-['']
        after:absolute
         after:left-1/2 after:-translate-x-1/2 
        after:bottom-[-8px]
        after:w-16
        after:h-[4px]
        after:bg-gray-500
        w-1/2
        max-lg:w-full max-lg:p-4
       ${fontOpenSans ? ' font-openSans' : ''}
      `}
        >
          {title}
        </h2>
        <p className="max-w-md mt-4 font-semibold text-sm max-lg:max-w-[23rem]">
          {/* {description} */}
          {description}
        </p>
      </div>
    </div>
  );
};
