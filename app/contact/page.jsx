import { AiOutlineBug } from "react-icons/ai";
import { BsChatRightText, BsPerson, BsPhone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaMoneyBill, FaNewspaper } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import Button from "../components/Button/Button";
const Contact = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="flex flex-col text-center w-full mb-15">
        <h1 className=" text-4xl font-bold tracking-wider title-font mb-4 text-white items-center justify-center flex gap-2 text-center max-lg:text-3xl">
          <span className="text-purple-400 border-b-2  border-purple-400  ">
            {" "}
            ourwork{" "}
          </span>{" "}
          details <FiTool size={40} className="text-purple-400" />
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque
          illum debitis nihil praesentium quasi porro tempore voluptate est
          obcaecati delectus repellat quod nemo velit temporibus sunt dolorem
          neque consequuntur!
        </p>
      </div>
      <div className="container  mx-auto md:px-6 mt-20">
        <section>
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="text-2xl text-gray-200 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none    dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                  <label
                    className="text-xl pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-purple-300  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary flex gap-2"
                    for="exampleInput90"
                  >
                    Name <BsPerson size={23} />
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="text-2xl peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                  <label
                    className="text-xl pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary flex gap-2"
                    for="exampleInput91"
                  >
                    Email address <CiMail size={23} />
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="text-2xl peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                  <label
                    for="exampleFormControlTextarea1"
                    className="text-xl pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary flex gap-2"
                  >
                    Message <BsChatRightText size={23} />
                  </label>
                </div>
           
            <Button 
            bgColor={'purple'}
            name={'send  message'}
            style={'bg-purple-400 text-xl text-black rounded-full'}
            icon={<FaRegComments size={30} />}
            />
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-purple-300 ">
                        <BsPhone size={40} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white text-xl">
                        Technical support
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        support@example.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-purple-300 ">
                        <FaMoneyBill size={40} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-xl dark:text-white">
                        Sales questions
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        sales@example.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-purple-300 ">
                        <FaNewspaper size={40} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white texl-xl">
                        Press
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        press@example.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-purple-300 ">
                    <AiOutlineBug size={40} /> 
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-xl dark:text-white ">
                        Bug report
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        bugs@example.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
