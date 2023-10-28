import React, { useRef } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { MapIcon } from "@heroicons/react/24/outline";

import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Contact() {
  const form = useRef(null);
  const email = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current ? form.current : "",
        `${process.env.NEXT_PUBLIC_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          const target = e.target as HTMLFormElement;
          target.reset();
        },
        (error) => {
          alert("Something went wrong");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left  max-w-7xl px-10  justify-center  mx-auto items-center">
      <h3 className=" hidden sm:inline-flex  sm:mt-24 uppercase tracking-[20px] text-white text-2xl text-center pb-10">
        Contact
      </h3>
      <div className=" mt-24 sm:mt-0 flex flex-col space-y-5 sm:space-y-10">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          Am I your guy?{" "}
          <span className=" decoration-orange-400/50 underline">
            Lets chat!
          </span>
        </h4>
        <div className=" space-y-2 sm:space-y-4">
          <div className=" flex items-center justify-center space-x-5 ">
            <PhoneIcon className=" text-orange-400 h-7 w-7 animate-pulse " />

            <p className="text-xl sm:text-2xl">+46703541899</p>
          </div>

          <div className=" flex items-center justify-center space-x-5 ">
            <EnvelopeIcon className=" text-orange-400 h-7 w-7 animate-pulse " />

            <p className="text-xl sm:text-2xl">fernandoaleitee99@gmail.com</p>
          </div>
          <div className=" flex items-center justify-center space-x-5 ">
            <MapIcon className=" text-orange-400 h-7 w-7 animate-pulse " />

            <p className=" text-xl sm:text-2xl">Stockholm area</p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col space-y-2  w-full px-10 sm:px-0 sm:w-fit mx-auto"
        >
          <div className=" flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              required={true}
              placeholder="Name"
              name="user_name"
              type="text"
              className="outline-none
              bg-slate-400/10  rounded-sm border-b px-6 py-2 border-[#6e6e6e] text-gray-500 placeholder-gray-400 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/60 hover:border-[#f7ab0a]/40"
            />
            <input
              required={true}
              placeholder="Email"
              ref={email}
              name="user_email"
              type="email"
              className="outline-none
              bg-slate-400/10 rounded-sm border-b px-6 py-2 border-[#6e6e6e] text-gray-500 placeholder-gray-400 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/60 hover:border-[#f7ab0a]/40"
            />
          </div>

          <input
            placeholder="Subject"
            name="user_subject"
            type="text"
            required={true}
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-2 border-[#6e6e6e] text-gray-500 placeholder-gray-400 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/60 hover:border-[#f7ab0a]/40"
          />
          <textarea
            required={true}
            name="message"
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-2 border-[#6e6e6e] text-gray-500 placeholder-gray-400 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/60 hover:border-[#f7ab0a]/40"
          />
          <button className=" bg-orange-400/80 py-2 px-10 rounded-md text-black font-bold text-lg hover:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
