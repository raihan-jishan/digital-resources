import { Animation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { PrimaryBtn } from "./ui";
import Heading from "./ui/heading";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";
const Contact = () => {
  return (
    <section className="bg-white text-black dark:bg-gray-900 dark:text-white" id="contact">
      <Animation>
        <Heading
          title={"contact"}
          textSmall
          borderSide
          description={"Discuse us"}
          paragraph={
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis dolores perfer  "
          }
        />
        <Wrapper className={"mt-10"}>
          <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md ">
            <div>
              <h1 className="text-gray-800 text-3xl ">Fell free</h1>
              <p className="text-sm text-gray-500 mt-4">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help.
              </p>

              <div className="mt-12">
                <h2 className="text-gray-800 dark:text-white font-semibold text-base ">
                  Email
                </h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <MdMailOutline size={30} />
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="text-black dark:text-white text-sm ml-4"
                    >
                      <strong>digital-resources@gmail.com</strong>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-gray-800 text-base ">Socials</h2>

                <ul className="flex mt-4 space-x-4">
                  <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="">
                      <FaFacebook size={30} />
                    </a>
                  </li>
                  <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="">
                      <AiFillTwitterCircle size={30}  />
                    </a>
                  </li>
                  <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="">
                    <FaLinkedin size={30}  />
                  </a>
                  </li>
                </ul>
              </div>
            </div>

            <form className="ml-auo space-y-4">
                <Input placeholderText={'Name'} type={'text'}   />
                <Input placeholderText={'Email'} type={'email'}   /> 
                <Input placeholderText={'Subject'} type={'text'}   />
             <TextArea text={'Message'} rows={'6'}  />
              <PrimaryBtn
                text={"Send"}
                path={"/"}
                pxFull
                roundedMedium
                varientHero
                icon={<RiMailSendLine size={25} />}
              />
            </form>
          </div>
        </Wrapper>
      </Animation>
    </section>
  );
};

export default Contact;
