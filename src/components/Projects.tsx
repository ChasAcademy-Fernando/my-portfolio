import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { Project } from "../../typings";
import { urlFor } from "@/lib/sanity";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex relative overflow-hidden flex-col text-left max-w-full  justify-evenly mx-auto items-center z-0 "
    >
      <h3 className=" pl-6 mt-24 uppercase tracking-[20px] text-2xl text-white text-center">
        Projects
      </h3>

      <div className=" scrollbar scrollbar-track-gray-400/20 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-10 md:p-44 "
            >
              <Image
                src={urlFor(project?.image).url()}
                alt="Social Media Clone App"
                width={500}
                height={500}
                className=" h-40  md:h-full object-contain"
              />
              <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-center  text-2xl md:text-4xl font-semibold">
                  <span className=" underline decoration-orange-400">
                    Project:
                  </span>{" "}
                  {project.title}
                </h4>
                {
                  <div className=" flex space-x-4 justify-center">
                    {project?.technologies.map((tech) => (
                      <Image
                        key={tech._id}
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                        width={100}
                        height={100}
                        className="w-10 h-10 object-contain"
                      />
                    ))}
                  </div>
                }
                <p className=" max-w-2xl text-center md:text-center text-lg">
                  {project?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full absolute top-[30%] bg-[#ec97514f] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
