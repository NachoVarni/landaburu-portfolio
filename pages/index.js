import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-grayBg ">
      <Head>
        <title>Shuamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:w-3/4 md:m-auto">
        <Navbar />
      </div>
    </div>
  );
}
