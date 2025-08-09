import Link from "next/link";

const NavLink = ({path, label}) => {
  return (
    <li>
      <Link
        href={path}
        className="block py-2 px-3 text-black font-semibold tracking-wide    md:bg-transparent md:p-0  transition-all duration-400 border-b-2 border-b-transparent hover:border-black"
        aria-current="page"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
