import React, { ReactNode, Fragment, useReducer, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import MaxWidthContainer from "./MaxWidthContainer";

import useDataReducer from "@/helpers/hooks/useDataReducer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const data = useDataReducer();

  return (
    <Fragment>
      {data.header && <Header data={data.header} />}
      <main>
        <MaxWidthContainer>{children}</MaxWidthContainer>
      </main>
      {data.footer && <Footer data={data.footer} />}
    </Fragment>
  );
};

export default Layout;
