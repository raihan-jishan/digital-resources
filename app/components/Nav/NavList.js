import Link from "next/link";
const NavList = ({Navdata, click}) => {
  return (
    <div>
       <div className={click ? "block w-full md:block md:w-auto":"hidden w-full md:block md:w-auto"} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-200 ">
             {Navdata.map((data)=> {
              return(
                <li key={data.id}>
                <Link
                 href={data.path}
                  className="text-xl block py-2 px-3 text-white bg-gray-200 rounded md:bg-transparent md:text-gray-50 md:p-0 dark:text-white md:dark:text-gray-50 hover:text-purple-500"
                  aria-current="page"
                >
                  {data.name}
                </Link>
              </li>
              )
             })}
       
            </ul>
          </div>
    </div>
  )
}

export default NavList