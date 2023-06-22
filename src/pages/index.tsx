import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

import Hero from "@/components/home/Hero";
import { HeroDataType } from "@/types/hero";

interface HomeProps {
  heroData: HeroDataType;
}

const Home = (props: HomeProps) => {
  const { heroData } = props;

  return (
    <Fragment>
      <Hero data={heroData} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "data", "hero.json");
  const fileData = await fs.readFile(filePath);
  const heroData = JSON.parse(fileData.toString());

  return {
    props: {
      heroData: heroData,
    },
  };
}

export default Home;
