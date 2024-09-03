import Link from 'next/link'

const Logo = () => {
  return (
    <Link
    href="/"
    className="flex items-center space-x-3 rtl:space-x-reverse"
  >
   
    <span className="self-center text-xl max-lg:font-semibold capitalize font-nnormal whitespace-nowrap  font-semibold dark:font-normal dark:text-white max-lg:text-[0.9rem]">
      digital-resources
    </span>
  </Link>
  )
}

export default Logo