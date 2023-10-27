import React from "react";
import { motion } from "framer-motion";
import { Technology } from "../../typings";
import { urlFor } from "../../sanity.config";

type Props = {
  skill: Technology;
};

export default function TechSkill({ skill }: Props) {
  return (
    <div className='group flex flex-col items-center cursor-pointer relative p-0 md:p-4'>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='h-24 w-24 rounded-full object-cover xl:w-32 xl:h-32 border-gray-500 transition duration-300 group-hover:grayscale ease-in-out'
        src={urlFor(skill?.image).url()}
      />
      <p className='hidden md:inline-flex text-lg py-4'>{skill?.title}</p>
      <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className=' flex items-center justify-center h-full'>
          <p className=' text-3xl font-bold text-black opacity-100'>
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
