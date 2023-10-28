import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import type { GetStaticProps } from "next";
import { PageInfo, Project, Social, Technology } from "../../typings";
import getPageInfo from "../../utils/getPageInfo";
import getSkills from "../../utils/getSkills";
import getSocials from "../../utils/getSocials";
import getProjects from "../../utils/getProjects";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  skills: Technology[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, socials, projects, skills }: Props) {
  return (
    <div className=" scroll-smooth bg-[#38114dea] text-[#d4d4d4] h-screen  overflow-scroll overflow-x-hidden z-0 scrollbar  scrollbar-thumb-orange-400 scrollbar-track-gray-400/20">
      <Head>
        <title>Fernando Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>
      {/*Skills*/}
      <section id="skills">
        <Skills skills={skills} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: PageInfo = await getPageInfo();
  const skills: Technology[] = await getSkills();
  const socials: Social[] = await getSocials();
  const projects: Project[] = await getProjects();

  return {
    props: {
      pageInfo,
      skills,
      socials,
      projects,
    },
    revalidate: 3,
  };
};
