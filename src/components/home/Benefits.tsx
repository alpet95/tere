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
    el: ".pagination-benefits",
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
            const { id: key, image, text } = slide;

            return (
              <SwiperSlide key={key} className={classes["swiper-item"]}>
                <h4 className={classes["swiper-item-title"]}>
                  <span>{text.title.span}</span>
                  {text.title.text}
                </h4>
                <Image
                  className={classes["swiper-item-image"]}
                  src={image.src}
                  alt={image.alt}
                  width={225}
                  height={220}
                />
                <p className={classes["swiper-item-description"]}>
                  {text.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="pagination-benefits swiper-pagination"></div>
      </div>

      <div className={classes["benefits-block"]}>
        {slides.map((slide) => {
          const { id: key, image, text } = slide;

          return (
            <div className={classes["benefits-item"]} key={key}>
              <div className={classes["benefits-item-text"]}>
                <h4 className={classes["benefits-item-title"]}>
                  <span>{text.title.span}</span>
                  {text.title.text}
                </h4>
                <p className={classes["benefits-item-description"]}>
                  {text.description}
                </p>
              </div>
              <Image
                className={classes["benefits-item-image"]}
                src={image.src}
                alt={image.alt}
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
