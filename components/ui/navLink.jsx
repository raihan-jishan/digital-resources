"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 


const NavLink = ({ path, label ,onClickFunction}) => {
  const pathName = usePathname();
  const isActive = pathName === path; 
  return (
    <li>
      <Link
        href={path}
        className={`block py-2 px-3 text-black font-semibold tracking-wide    md:bg-transparent md:p-0  transition-all duration-400 border-b-2  hover:border-black ${
          isActive ? "border-black" : "border-b-transparent"
        } `}
        aria-current="page"
        onClick={onClickFunction}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
