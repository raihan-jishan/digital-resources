import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, text, activeClasses, className, activeIcon ,handleClose}) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <>
      <Link
        className={`${isActive ? activeClasses : ""} ${className}`}
        href={href}
        onClick={handleClose}
      >
        {text} <span className="text-purple-300 hidden max-lg:block"> {isActive ? activeIcon : null}</span>
      </Link>
    </>
  );
};

export default ActiveLink;
