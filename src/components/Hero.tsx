import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

import Link from "next/link";

import { PageInfo } from "../../typings";
import { urlFor } from "@/lib/sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey, i'm ${pageInfo?.name}`,
      "Welcome to my page!",
      "Dev in the making!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-[calc(100vh)]  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className=" relative rounded-full mx-auto object-cover w-40 h-40 "
        src={urlFor(pageInfo?.heroImage).url()}
        alt="picture of fernando aleite"
        width={200}
        height={200}
      />
      <div className="z-20">
        <div>
          <h2 className=" text-sm uppercase text-[#a5a5a5] pt-4 pb-2 tracking-[15px]">
            {pageInfo?.role}
          </h2>
          <h1 className=" z-50 text-2xl lg:text-6xl font-semibold px-10">
            <span className=" mr-3">{text}</span>
            <Cursor cursorColor="#5C038C" />
          </h1>
        </div>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>

          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#contact"}>
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
