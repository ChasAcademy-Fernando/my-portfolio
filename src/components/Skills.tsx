import React from "react";
import { motion } from "framer-motion";
import TechSkill from "./TechSkill";
import { Technology } from "../../typings";

type Props = {
  skills: Technology[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left space-y-10 md:space-y-0 xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <div className='absolute top-24 px-5 pb-2 md:pb-0 md:space-y-0 space-y-2'>
        <h3 className='uppercase tracking-[20px] text-white text-2xl text-center'>
          Skills
        </h3>
        <p className=' uppercase tracking-[3px]  text-sm text-[#cfcfcf]'>
          Current tech i am profienct in or familiar with
        </p>
      </div>
      <div className=' grid  grid-cols-3 md:grid-cols-4 gap-5  '>
        {skills.map((skill) => (
          <TechSkill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
