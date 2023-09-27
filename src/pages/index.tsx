import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=' bg-[#38114dcc] text-[#d4d4d4] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Fernando Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className=' snap-center'>
        <Hero />
      </section>
      {/*Hero*/}
      {/*About*/}
      {/*Experience*/}
      {/*Skills*/}
      {/*Projects*/}
      {/*Contact me*/}
    </div>
  );
}
