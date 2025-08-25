import { Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export const ProvideCard = ({ icon, label, description }) => {
  return (
    <div className="max-w-[22rem] p-5 bg-white  hover:shadow-sm  rounded-lg   dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      {icon}
      <a href="#">
        <h5 className="mb-2 text-[1.25rem] font-semibold -tracking-wide text-gray-900 font-openSans  dark:text-white mt-2">
          {label}
        </h5>
      </a>
      <p className="mb-3 font-medium text-gray-900 w-[90%] dark:text-gray-400 text-[0.9rem]">
        {description}
      </p>
    </div>
  );
};

export const SpecialityCard = ({ image, label, description }) => {
  return (
    <div className="max-w-2xl bg-white  shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full border p-3 border-gray-50 ">
      <a
        href="#"
        className="max-lg:flex max-lg:items-center max-lg:justify-center"
      >
        <Image
          className="w-[50%] "
          src={image}
          alt="card image was not found!"
          width={200}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white   `}
          >
            {label}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export const CompanyLogo = ({ icon }) => {
  return <div className="p-4 flex m-2">{icon}</div>;
};

export const ReviewCard = ({
  name,
  twitterHandel,
  rating,
  review,
  date,
  imageUrl,
}) => {
  return (
    <div>
      <figure className="relative rounded-2xl  bg-gray-100 p-6 shadow-sm shadow-slate-900/10">
        <svg
          aria-hidden="true"
          width="105"
          height="78"
          className="absolute left-6 top-6 fill-slate-100"
        >
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
        </svg>
        <blockquote className="relative">
          <p className="text-lg  text-slate-900 font-openSans tracking-wide">
            {review}
          </p>
        </blockquote>
        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="">
            <div className="font-display text-base font-semibold text-slate-900">
              {name}
            </div>
            <div className="font-display text-base text-slate-900 mt-2 flex items-center">
              <Twitter size={20} /> {twitterHandel}
            </div>
          </div>
          <div className="overflow-hidden rounded-full bg-slate-50">
            <Image
              alt=""
              className="h-14 w-14 object-cover"
             style={{ color: "transparent" }}
              src={imageUrl}
              width={400}
              height={200}
            />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export const WorkCard = ({ label, description, imageUrl }) => {
  return (
    <div className="relative flex flex-col my-6 bg-gray-50 shadow-sm border border-slate-100 rounded-lg w-full">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <Image src={imageUrl} alt="card-image" width={600} height={200} />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-2xl font-extrabold capitalize   ">
          {label}
        </h6>
        <p className="text-black leading-8  font-medium   ">{description}</p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2  ">
        <Button variant="default" size="workCard">
          Get Short Overview
        </Button>
      </div>
    </div>
  );
};
