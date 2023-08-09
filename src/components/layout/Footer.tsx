import React from "react";
import Image from "next/image";

import MaxWidthContainer from "./MaxWidthContainer";
import Button from "../interface/Button";

import { FooterDataType } from "@/types/footer";
import classes from "./Footer.module.scss";

interface FooterProps {
  data: FooterDataType;
}

const Footer = (props: FooterProps) => {
  const { data } = props;

  const { src, alt, width, height } = data.logo;
  const logo = { src, alt, width, height };

  const { title, address: { location, email, phone }} = data.text;
  const address = { title, location, email, phone };

  const buttonsData = data.buttons;
  const buttonsElement = buttonsData.map((button) => {
    const key = button.key;
    const src = button.icon.src;
    const alt = button.icon.alt;
    const width = button.icon.width;
    const height = button.icon.height;
    const text = button.text;

    return (
      <Button key={key}>
        <Image src={src} alt={alt} width={width} height={height} />
        {text}
      </Button>
    );
  });

  return (
    <footer className={classes.footer}>
      <MaxWidthContainer>
        <div className={classes["footer-content"]}>
          <Image
            className={classes["footer-logo"]}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />

          <div className={classes["footer-actions"]}>{buttonsElement}</div>

          <div className={classes["footer-address"]}>
            <h4>{address.title}</h4>
            <address>
              <p>{address.location}</p>
              <a href="mailto:#">{address.email}</a>
              <a href="tel:#">{address.phone}</a>
            </address>
          </div>
        </div>
        <div className={classes["footer-copyright"]}>
          <p>2023 &copy; All Rights Reserved.</p>
          <p>Website by Alpet</p>
          <p>Design by Codematics</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
