import React, { Fragment } from "react";
import path from "path";

import { PageComponent } from "@/helpers/PageComponent";
import { dataFolderPath, getPageData } from "@/helpers/data-utilities";

interface HomeProps {
  data: any[];
}

const Home = (props: HomeProps) => {
  const { data } = props;

  return (
    <Fragment>
      <PageComponent data={data} />
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const homePage = path.join(dataFolderPath, "home");
    const data = await getPageData(homePage);

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);

    return {
      props: { data: null },
    };
  }
}

export default Home;
