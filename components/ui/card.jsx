import Image from "next/image";
import { BsViewStacked } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiLink, FiServer } from "react-icons/fi";
import { LuWallpaper } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { PrimaryBtn } from ".";

export const featureCard = ({
  title,
  icon,
  description,
  boxShadow,
  boxShadowMid,
}) => {
  return (
    <div
      className={`flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all  rounded-2xl  ${
        boxShadow
          ? "dark:shadow-2xl  shadow-2xl shadow-black/10 dark:shadow-secondary/10 dark:hover:shadow-secondary/25"
          : boxShadowMid
          ? "shadow-xl shadow-secondary/15 hover:shadow-secondary/30 dark:shadow-none"
          : ""
      } dark:hover:bg-gray-800 hover:bg-gray-50 dark:border-2 dark:border-gray-900 border-none`}
    >
      <div className="flex items-center justify-center  text-black dark:text-secondary hover:animate-pulse ">
        {icon}
      </div>
      <h3 className="text-lg font-semibold capitalize   mt-4 text-black dark:text-gray-200">
        {title}
      </h3>
      <p className="text-muted-foreground mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};

// productCard
export const productCard = ({
  title,
  imageUrl,
  boxShadowMid,
  description,
  boxShadow,
  path,
}) => {
  return (
    <div
      className={`max-w-sm bg-white   rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 mt-auto ${
        boxShadow
          ? "shadow-2xl shadow-secondary/15 hover:shadow-secondary/30"
          : boxShadowMid
          ? "shadow-xl shadow-secondary/15 hover:shadow-secondary/30"
          : "hover:bg-gray-800"
      }  `}
    >
      <Image
        className="rounded-t-lg"
        src={imageUrl}
        width={400}
        height={200}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-[1.3rem] capitalize  tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="text-center flex items-center justify-between w-full mt-6 gap-5">
          <PrimaryBtn
            text={"view details"}
            path={path}
            pxFull
            varientHero
            icon={<BsViewStacked size={20} />}
            roundedMedium
          />
          <FiLink size={30} className="dark:text-secondary" />
        </div>
      </div>
    </div>
  );
};

// productDetailsCard
export const productDetailsCard = ({
  name,
  description,
  reviewCount,
  ratings,
}) => {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-0">
      <h1 className="text-xl capitalize font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {name}
      </h1>
      <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"></p>

        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            <MdStar size={20} />
          </div>
          <p className="text-sm font-bold leading-none text-gray-500 dark:text-gray-400">
            {ratings}
          </p>
          <a
            href="#"
            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
          >
            {reviewCount} reviews
          </a>
        </div>
      </div>

      <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
        <PrimaryBtn
          text={"live demo"}
          path={"/"}
          icon={<FiServer size={20} />}
          roundedMedium
        />
        <PrimaryBtn
          text={"github repo"}
          path={"/"}
          icon={<FaGithub size={20} />}
          roundedMedium
        />
      </div>

      <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

      <p className="mb-6 text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

// reviewCard
export const ReviewCard = ({ name, handle, review, Avatar }) => {
  return (
    <div className="flex flex-col justify-between rounded-md    bg-white   dark:bg-gray-800  p-5 shadow-sm max-w-sm mx-auto mt-24 ">
      <div className="mt-6 flex items-center gap-6 ">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <Image
              alt=""
              src={Avatar}
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="inline-block "
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="leading-relaxed tracking-wide text-xl dark:text-gray-200 text-black">
            {name}
          </h2>
          <p className="text-[1rem] leading-relaxed tracking-wide  text-gray-500 dark:text-gray-400 flex gap-3">
            <CiTwitter size={25} className="text-black dark:text-primary " /> @
            {handle}
          </p>
        </div>
      </div>
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-black dark:text-gray-400">
        {review}
      </p>
    </div>
  );
};

// blogCard
export const BlogCard = ({
  blogTag,
  blogTitle,
  publishedDate,
  avatarImage,
  authorName,
  blogDescription,
}) => {
  return (
    <article className="p-6   rounded-lg border   shadow-md  dark:bg-gray-800 bg-white text-black border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100  text-xs inline-flex items-center px-2.5 py-0.5  dark:bg-primary-200  text-black dark:text-primary gap-3 font-semibold border-b border-gray-200">
          <LuWallpaper size={20} />
          {blogTag}
        </span>
        <span className="text-sm">{publishedDate}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight    text-black dark:text-white">
        {blogTitle}
      </h2>
      <p className="mb-5 font-light  text-gray-400">{blogDescription}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg px-2 cursor-pointer">
          <Image
            width={300}
            height={200}
            className="w-7 h-7 rounded-full"
            src={avatarImage}
            alt="Jese Leos avatar"
          />
          <span className="font-medium dark:text-gray-200 ">{authorName}</span>
        </div>
        <PrimaryBtn text={"Read more"} path={"/"} varientHero roundedMedium />
      </div>
    </article>
  );
};
