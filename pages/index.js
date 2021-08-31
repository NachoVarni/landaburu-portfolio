import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const Adventadges = dynamic(() => import("../components/Advantadges"));
const Education = dynamic(() => import("../components/Education"));
const Projects = dynamic(() => import("../components/Projects"));
const FindMe = dynamic(() => import("../components/FindMe"));
const Footer = dynamic(() => import("../components/Footer"));
import useInView from "react-cool-inview";

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div className="bg-grayBg ">
      <Head>
        <title>Shuamp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Juan Pablo Landaburu's personal page"
        />
        <meta property="og:title" content="My personal page" />
      </Head>
      <div className="w-11/12 md:w-5/6 m-auto font-poppins" ref={observe}>
        <Navbar />
        <Hero />
        {inView && <Adventadges />}
        {inView && <Education />}
        {inView && <Projects />}
        {inView && <FindMe />}
        {inView && <Footer />}
      </div>
    </div>
  );
}
