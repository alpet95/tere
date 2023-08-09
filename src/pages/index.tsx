import React, { Fragment } from "react";

import path from "path";
import { fetchPageData, dataFolderPath } from "@/helpers/data-utilities";

import Hero from "@/components/home/Hero";
import PhoneForm from "@/components/home/PhoneForm";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";

import { HeroDataType } from "@/types/hero";
import { PhoneFormDataType } from "@/types/phone-form";
import { HowItWorksDataType } from "@/types/how-it-works";
import { BenefitsDataType } from "@/types/benefits";

type ComponentDataType = HeroDataType | PhoneFormDataType | HowItWorksDataType | BenefitsDataType;
type ComponentMapDataType = {
  [key: string]: ComponentDataType;
};

interface HomeProps {
  data: ComponentDataType[];
}

const components = ["hero", "phone-form", "how-it-works", "benefits"];

const Home = (props: HomeProps) => {
  const { data } = props;
  const componentDataMap: ComponentMapDataType = data.reduce(
    (acc: ComponentMapDataType, item) => {
      acc[item.page] = item;
      return acc;
    },
    {}
  );

  return (
    <Fragment>
      {components.map((component) => {
        const componentData: ComponentDataType = componentDataMap[component];
        switch (component) {
          case "hero":
            return (
              <Hero
                key={componentData.page}
                data={componentData as HeroDataType}
              />
            );
          case "phone-form":
            return (
              <PhoneForm
                key={componentData.page}
                data={componentData as PhoneFormDataType}
              />
            );
          case "how-it-works":
            return (
              <HowItWorks
                key={componentData.page}
                data={componentData as HowItWorksDataType}
              />
            );
          case "benefits":
            return (
              <Benefits
                key={componentData.page}
                data={componentData as BenefitsDataType}
              />
            );
          default:
            return null;
        }
      })}
    </Fragment>
  );
};

export async function getStaticProps() {
  const pageDataFolderPath = path.join(dataFolderPath, "home");
  const data = await fetchPageData(pageDataFolderPath);

  return {
    props: { data },
  };
}

export default Home;
