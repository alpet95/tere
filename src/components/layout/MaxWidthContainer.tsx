import React, { ReactNode } from "react";
import classes from "./MaxWidthContainer.module.scss"

interface Props {
  children: ReactNode;
};

const MaxWidthContainer = (props: Props) => {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};

export default MaxWidthContainer;
