import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

import Hero from "@/components/home/Hero";
import PhoneForm from "@/components/home/PhoneForm";
import { HeroDataType } from "@/types/hero";
import { PhoneFormDataType } from "@/types/phone-form";

interface HomeProps {
  heroData: HeroDataType;
  phoneFormData: PhoneFormDataType;
}

const Home = (props: HomeProps) => {
  const { heroData, phoneFormData } = props;

  return (
    <Fragment>
      <Hero data={heroData} />
      <PhoneForm data={phoneFormData} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "data", "hero.json");
  const fileData = await fs.readFile(filePath);
  const heroData = JSON.parse(fileData.toString());

  const filePathPhoneForm = path.join(
    process.cwd(),
    "src",
    "data",
    "phone-form.json"
  );
  const fileDataPhoneForm = await fs.readFile(filePathPhoneForm);
  const phoneFormData = JSON.parse(fileDataPhoneForm.toString());

  return {
    props: {
      heroData: heroData,
      phoneFormData: phoneFormData,
    },
  };
}

export default Home;
