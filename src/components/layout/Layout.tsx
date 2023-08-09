import React, { ReactNode, Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import MaxWidthContainer from "./MaxWidthContainer";

import { FOOTER_DATA as footerData } from "@/data/layout/footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <main>
        <MaxWidthContainer>{children}</MaxWidthContainer>
      </main>
      <Footer data={footerData} />
    </Fragment>
  );
};

export default Layout;
