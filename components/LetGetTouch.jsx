import Section from "@/section/Section";
import React from "react";
import { Heading } from "./ui/heading";
import Image from "next/image";
import Input from "./ui/Input";
import Textarea from "./ui/textarea";
import { Button } from "./ui/button";
import { LetterText, Mail, MessageCircle } from "lucide-react";

const LetGetTouch = () => {
  return (
    <Section className={"mt-20 "} id={"contact"}>
      <Heading title={"Let Get In Touch"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-12 max-w-7xl mx-auto max-lg:flex max-lg:flex-col-reverse ">
        {/* Contact Form */}
        <div className="w-full max-w-xl mx-auto">
          <form
            action="#"
            className="space-y-6  bg-white p-2   rounded-lg shadow-sm dark:bg-gray-800"
          >
            <Input
              label={"Your email address"}
              icon={<Mail size={20} />}
              htmlFor={"email"}
              inputId={"email"}
              inputType={"email"}
              placeholder={"name@example.com"}
            />
            <Input
              label={"Subject"}
              icon={<LetterText size={20} />}
              htmlFor={"subject"}
              inputId={"subject"}
              inputType={"text"}
              placeholder={"Let us know how we can help"}
            />

            <Textarea
              label={"Your message"}
              icon={<MessageCircle size={20} />}
              id={"message"}
              row={"6"}
              placeholder={"Leave a comment..."}
            />

            <Button variant="default" size="heroBtn">
              Send Message
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full max-w-md mx-auto">
          <Image
            src="assets/Quick-response.svg"
            width={400}
            height={300}
            alt="Customer support"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Section>
  );
};

export default LetGetTouch;
