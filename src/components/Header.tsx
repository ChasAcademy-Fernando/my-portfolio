import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Social } from "../../typings";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  const router = useRouter();
  return (
    <header className=" sticky top-0  flex items-start p-5 justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.2 }}
        className=" flex  items-center"
      >
        {/*Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#d4d4d4"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.2 }}
        className=" flex  items-center text-gray-300 cursor-pointer"
        onClick={() => {
          router.push("#contact");
        }}
      >
        <SocialIcon
          className=" cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="#d4d4d4"
        />

        <p className=" uppercase hidden md:inline-flex">Contact me</p>
      </motion.div>
    </header>
  );
}
