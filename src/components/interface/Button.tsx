import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const Button = (props: Props) => {
  const { children } = props;
  return (
    <button className={`${classes.button} ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
