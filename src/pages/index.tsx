import Head from "next/head";
import Hero from "@/components/sections/hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Features from "@/components/sections/features/Features";
import ProjectDetails from "@/components/sections/projectdetails/ProjectDetails";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = "auto";
    }, 700);
  }, []);

  return (
    <>
      <Head>
        <title>Tetra Bot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {showContent && (
        <>
          <Stats />
          <Features />
          <ProjectDetails />
        </>
      )}
    </>
  );
}
