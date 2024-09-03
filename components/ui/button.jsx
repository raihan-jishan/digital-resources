import Link from "next/link";

export const primaryBtn = ({
  path,
  text,
  icon,
  pyFull,
  pxFull,
  varientHero,
  roundedMedium,
  roundedFull,
  shadow,
  pxFullInMobile,
}) => {
  return (
    <Link
      className={`   flex items-center justify-center ${
        shadow ? "shadow-2xl shadow-black/90 hover:shadow-secondary/60" : ""
      } ${pxFull ? "px-12 " : pxFullInMobile ? "px-20" : "px-8"}  ${
        pyFull
          ? "py-3   max-lg:w-full  max-lg:text-center text-center "
          : "py-2"
      } ${
        roundedMedium
          ? "rounded-md"
          : roundedFull
          ? "rounded-full"
          : "rounded-xl"
      } font-semibold      gap-3 capitalize hover:scale-95 transition-all  max-lg:px-2    ${
        varientHero
          ? "  dark:darkBtn-gradient lightBtn-gradient text-white dark:text-black hover:bg-gray-100/90"
          : "dark:btn-gradient lightBtn-gradient-nav text-white dark:text-gray-50 hover:bg-gray-200 "
      } `}
      href={path}
    >
      {text} {icon}
    </Link>
  );
};
