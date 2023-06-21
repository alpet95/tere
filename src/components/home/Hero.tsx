import React from "react";
import Image from "next/image";

import Button from "../interface/Button";

import heroImage from "../../../public/images/hero-image.png";
import playStoreIcon from "../../../public/icons/button-icon-play-store.svg";
import appStoreIcon from "../../../public/icons/button-icon-app-store.svg";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-content"]}>
        <div className={classes["hero-image"]}>
          <Image src={heroImage} alt="Hero Image" fill />
        </div>
        <div className={classes["hero-text"]}>
          <h1 className={classes["hero-text-title"]}>
            Download App, save money, make friends!
          </h1>
          <p className={classes["hero-text-description"]}>
            It's simple and it's free. Play your part in reducing Carbon
            Footprint and help Mother Nature to sustain its beauty. So what are
            you waiting for? Lets ride together!
          </p>
          <div className={classes["hero-actions"]}>
            <Button>
              <Image
                src={playStoreIcon}
                alt="Play Store Icon"
                width={26}
                height={23}
              />
              Download
            </Button>
            <Button>
              <Image
                src={appStoreIcon}
                alt="Apple Store Icon"
                width={26}
                height={23}
              />
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
