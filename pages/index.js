import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Adventadges from "../components/Advantadges";
import Education from "../components/Education";
import Projects from "../components/Projects";
import FindMe from "../components/FindMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-grayBg ">
      <Head>
        <title>Shuamp</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className="w-11/12 md:w-5/6 m-auto font-poppins">
        <Navbar />
        <Hero />
        <Adventadges />
        <Education />
        <Projects />
        <FindMe />
        <Footer />
      </div>
    </div>
  );
}
