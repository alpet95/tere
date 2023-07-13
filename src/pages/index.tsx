import React, { Fragment, useState, useEffect } from "react";
import fs from "fs/promises";
import path from "path";

import Hero from "@/components/home/Hero";
import PhoneForm from "@/components/home/PhoneForm";
import HowItWorks from "@/components/home/HowItWorks";

import { HeroDataType } from "@/types/hero";
import { PhoneFormDataType } from "@/types/phone-form";

interface HomeProps {
  data: any[];
  // heroData: HeroDataType;
  // phoneFormData: PhoneFormDataType;
}

const pages = ["hero", "phone-form"];

const Home = (props: HomeProps) => {
  const { data } = props;

  return (
    <Fragment>
      <Hero data={data[0]} />
      <PhoneForm data={data[1]} />
      <HowItWorks />
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const filePaths = [
      path.join(process.cwd(), "src", "data", "hero.json"),
      path.join(process.cwd(), "src", "data", "phone-form.json"),
    ];
    const data = await Promise.all(
      filePaths.map(async (path) => {
        const fileData = await fs.readFile(path);
        const parsedData = JSON.parse(fileData.toString());
        return parsedData;
      })
    );

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error reading or parsing files:", error);

    return {
      props: { data: [] },
    };
  }

  // const filePath = path.join(process.cwd(), "src", "data", "hero.json");
  // const fileData = await fs.readFile(filePath);
  // const heroData = JSON.parse(fileData.toString());

  // const filePathPhoneForm = path.join(
  //   process.cwd(),
  //   "src",
  //   "data",
  //   "phone-form.json"
  // );
  // const fileDataPhoneForm = await fs.readFile(filePathPhoneForm);
  // const phoneFormData = JSON.parse(fileDataPhoneForm.toString());

  // return {
  //   props: {
  //     heroData: heroData,
  //     phoneFormData: phoneFormData,
  //   },
  // };
}

export default Home;
