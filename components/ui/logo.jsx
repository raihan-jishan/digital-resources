import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white font-openSans -tracking-normal max-lg:text-[1.2rem]">
        Digital Resources
      </span>
    </Link>
  );
};

export default Logo;
