import React, { ReactNode } from "react";
import MaxWidthContainer from "./MaxWidthContainer";

interface Props {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <MaxWidthContainer>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </MaxWidthContainer>
  );
};

export default Layout;
