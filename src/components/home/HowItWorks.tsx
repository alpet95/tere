import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { PaginationOptions, AutoplayOptions } from "swiper/types";

import { addGreenToHeading } from "@/helpers/utilities";
import { HowItWorksDataType } from "@/types/how-it-works";

import classes from "./HowItWorks.module.scss";

interface HowItWorksProps {
  data: HowItWorksDataType;
}

const HowItWorks = (props: HowItWorksProps) => {
  const { data } = props;

  const { slides, image } = data;
  const { heading, description } = data.text;
  const formattedHeading = addGreenToHeading(heading);

  const pagination: PaginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const autoplay: AutoplayOptions = {
    delay: 3000,
    disableOnInteraction: true,
  };

  const breakpoints = {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
  };

  return (
    <section className={classes.section}>
      <h2
        className={classes.heading}
        dangerouslySetInnerHTML={{ __html: formattedHeading }} />
      <p className={classes.description}>{description}</p>

      <div className={classes["swiper-demo"]}>
        <Swiper
          className={classes["swiper-container"]}
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          autoplay={autoplay}
          spaceBetween={150}
          speed={500}
          breakpoints={breakpoints}
          loop
        >
          {slides.map((slide) => {
            const { id: key, image, text } = slide;

            return (
              <SwiperSlide key={key} className={classes["swiper-item"]}>
                <Image src={image.src} alt={image.alt} width={55} height={55} />
                <h4 className={classes["swiper-item-title"]}>{text.title}</h4>
                <p className={classes["swiper-item-description"]}>
                  {text.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className={`swiper-pagination ${classes["swiper-pagination"]}`}
        ></div>
      </div>

      <div className={classes.main}>
        {slides.map((slide, index) => {
          const { id: key, image, text } = slide;

          return (
            <div
              key={key}
              id={classes[`steps-item-${index + 1}`]}
              className={classes["steps-item"]}
            >
              <Image src={image.src} alt={image.alt} width={55} height={55} />
              <h4 className={classes["steps-item-title"]}>{text.title}</h4>
              <p className={classes["steps-item-description"]}>{text.description}</p>
            </div>
          );
        })}

        <div className={classes.image}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 769px) 100vw, (min-width: 1025px) 100vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
