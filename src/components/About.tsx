import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity.config";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left  h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <div className=' w-full flex justify-center '>
        <h3 className=' mt-24 uppercase tracking-[20px] text-2xl text-white text-center'>
          About
        </h3>
      </div>
      <motion.div
        className='flex flex-col md:flex-row items-center justify-evenly space-y-4'
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          width={500}
          height={500}
          className=' md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:96 xl:w-[500px] xl:h-[680px]  '
          alt='picture of fernando aleite'
          src={urlFor(pageInfo?.profilePic).url()}
        />

        <div className=' space-y-10 px-0 md:px-10'>
          <h4 className=' text-2xl md:text-4xl font-semibold'>
            Here is a{" "}
            <span className=' underline decoration-orange-400/80'>little</span>{" "}
            background
          </h4>
          <p className=' text-lg'>{pageInfo?.backgroundInformatio}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
