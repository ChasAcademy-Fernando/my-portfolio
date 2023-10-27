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
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  skills: Technology[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, socials, projects, skills }: Props) {
  return (
    <div className=' bg-[#38114dea] text-[#d4d4d4] h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar  scrollbar-thumb-orange-400 scrollbar-track-gray-400/20'>
      <Head>
        <title>Fernando Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id='hero' className=' snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className=' snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      {/*Skills*/}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Technology[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

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
