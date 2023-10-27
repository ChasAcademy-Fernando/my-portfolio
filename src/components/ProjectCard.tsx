import React from "react";
import WeatherApp from "../../public/weather.png";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function ProjectCard({}: Props) {
  return (
    <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-slate-600 w-[500px] md:w-[600px] xl:w-[900px] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className=' w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
          src={WeatherApp}
          alt='picture of weather icon'
        />
      </motion.div>
      <div className=' px-0 md:px-10'>
        <h4 className=' text-4xl'>Project title</h4>
        <div>
          <Image
            className=' h-10 w-10 rounded-full '
            src={WeatherApp}
            alt='picture of weather icon'
          />
          <Image
            className=' h-10 w-10 rounded-full '
            src={WeatherApp}
            alt='picture of weather icon'
          />
          <Image
            className=' h-10 w-10 rounded-full '
            src={WeatherApp}
            alt='picture of weather icon'
          />
        </div>
        <p className=' py-5 '>description of project</p>
      </div>
    </article>
  );
}

export default ProjectCard;
