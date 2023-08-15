import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { PaginationOptions, AutoplayOptions } from "swiper/types";

import { addGreenToHeading } from "@/helpers/utilities";
import { BenefitsDataType } from "@/types/benefits";

import classes from "./Benefits.module.scss";

interface BenefitsProps {
  data: BenefitsDataType;
}

const Benefits = (props: BenefitsProps) => {
  const { data } = props;

  const heading = data.text.heading;
  const formattedHeading = addGreenToHeading(heading);
  const slides = data.slides;

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
    },
  };

  return (
    <section className={classes.section}>
      <h2
        className={classes.heading}
        dangerouslySetInnerHTML={{ __html: formattedHeading }}
      ></h2>
      <div className={classes["swiper-block"]}>
        <Swiper
          className={classes["swiper-container"]}
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          autoplay={autoplay}
          spaceBetween={150}
          speed={500}
          breakpoints={breakpoints}
        >
          {slides.map((slide) => {
            const key = slide.id;
            const { src, alt } = slide.image;
            const { title, description } = slide.text;

            return (
              <SwiperSlide key={key} className={classes["swiper-item"]}>
                <h4 className={classes["swiper-item-title"]}>
                  <span>{title.span}</span>
                  {title.text}
                </h4>
                <Image
                  className={classes["swiper-item-image"]}
                  src={src}
                  alt={alt}
                  width={225}
                  height={220}
                />
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

      <div className={classes["benefits-block"]}>
        {slides.map((slide) => {
          const key = slide.id;
          const { src, alt } = slide.image;
          const { title, description } = slide.text;

          return (
            <div className={classes["benefits-item"]} key={key}>
              <div className={classes["benefits-item-text"]}>
                <h4 className={classes["benefits-item-title"]}>
                  <span>{title.span}</span>
                  {title.text}
                </h4>
                <p className={classes["benefits-item-description"]}>
                  {description}
                </p>
              </div>
              <Image
                className={classes["benefits-item-image"]}
                src={src}
                alt={alt}
                width={225}
                height={173}
                priority
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
