import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = (props: Props) => {
  const { children, className, type } = props;
  return (
    <button type={type} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
