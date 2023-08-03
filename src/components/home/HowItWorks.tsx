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

  const heading = data.text.heading;
  const formattedHeading = addGreenToHeading(heading);
  const description = data.text.description;
  const slides = data.slides;
  const phoneImageSrc = data.image.src;
  const phoneImageAlt = data.image.alt;

  const pagination: PaginationOptions = {
    el: ".pagination-container",
    clickable: true,
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
      autoHeight: false,
    },
  };

  return (
    <section className={classes.section}>
      <h2
        className={classes.heading}
        dangerouslySetInnerHTML={{ __html: formattedHeading }}
      ></h2>
      <p className={classes.description}>{description}</p>

      <div className={classes.main}>
        {slides.map((slide, index) => {
          const key = slide.id;
          const src = slide.image.src;
          const alt = slide.image.alt;
          const title = slide.text.title;
          const description = slide.text.description;

          return (
            <div
              key={key}
              id={classes[`steps-item-${index + 1}`]}
              className={classes["steps-item"]}
            >
              <Image src={src} alt={alt} width={55} height={55} />
              <h4 className={classes["steps-item-title"]}>{title}</h4>
              <p className={classes["steps-item-description"]}>{description}</p>
            </div>
          );
        })}

        <div className={classes.image}>
          <Image src={phoneImageSrc} alt={phoneImageAlt} fill />
        </div>
      </div>

      {/* mobile */}
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
          autoHeight
        >
          {slides.map((slide) => {
            const key = slide.id;
            const src = slide.image.src;
            const alt = slide.image.alt;
            const title = slide.text.title;
            const description = slide.text.description;

            return (
              <SwiperSlide key={key} className={classes["swiper-item"]}>
                <Image src={src} alt={alt} width={55} height={55} />
                <h4 className={classes["swiper-item-title"]}>{title}</h4>
                <p className={classes["swiper-item-description"]}>
                  {description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className={`pagination-container ${classes["swiper-pagination"]}`}
        ></div>
      </div>
    </section>
  );
};

export default HowItWorks;
