import React from "react";
import Image from "next/image";

import Button from "../interface/Button";
import { HeroDataType } from "@/types/hero";

import classes from "./Hero.module.scss";

interface HeroProps {
  data: HeroDataType;
}

const Hero = (props: HeroProps) => {
  const { data } = props;

  const title = data.text.title;
  const description = data.text.description;
  const heroImageSrc = data.image.src;
  const heroImageAlt = data.image.alt;
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
    <section className={classes.hero}>
      <div className={classes["hero-content"]}>
        <div className={classes["hero-image"]}>
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            sizes="(min-width: 769px) 100vw, (min-width: 1025px) 100vw, 100vw"
          />
        </div>

        <div className={classes["hero-text"]}>
          <h1 className={classes["hero-text-title"]}>{title}</h1>
          <p className={classes["hero-text-description"]}>{description}</p>
          <div className={classes["hero-actions"]}>{buttonsElement}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
