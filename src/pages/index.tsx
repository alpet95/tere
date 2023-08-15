import React, { Fragment } from "react";
import Head from "next/head";

import { getHomePageData } from "@/lib/load-page-data";
import { PageComponent } from "@/helpers/PageComponent";

interface HomeProps {
  data: any[];
}

const Home = (props: HomeProps) => {
  const { data } = props;

  return (
    <Fragment>
      <Head>
        <title>Tere | Home</title>
        <meta
          name="description"
          content="Join our platform today to take advantage of competitive fares and opportunities for increased income."
        />
      </Head>
      <PageComponent data={data} />
    </Fragment>
  );
};

export async function getServerSideProps() {
  try {
    const data = await getHomePageData();

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
