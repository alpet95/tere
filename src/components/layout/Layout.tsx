import React, { ReactNode, Fragment } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Header from "./Header";

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
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
