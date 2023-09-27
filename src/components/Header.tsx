import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=' sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-50 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.2 }}
        className=' flex  items-center'
      >
        {/*Social Icons */}
        <SocialIcon
          url='https://se.linkedin.com/in/fernando-aleite-1b429b172'
          fgColor='#d4d4d4'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://se.linkedin.com/in/fernando-aleite-1b429b172'
          bgColor='transparent'
          fgColor='#d4d4d4'
        />
        <SocialIcon
          url='https://se.linkedin.com/in/fernando-aleite-1b429b172'
          bgColor='transparent'
          fgColor='#d4d4d4'
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.2 }}
        className=' flex  items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className=' cursor-pointer'
          network='email'
          bgColor='transparent'
          fgColor='#d4d4d4'
        />
        <p className=' uppercase hidden md:inline-flex'>Contact me</p>
      </motion.div>
    </header>
  );
}

/**
 * Colors
 Indigo
#420264

Violet
#5C038C

Dark Blue
#1B1734

Purple
#896FBC
 */
