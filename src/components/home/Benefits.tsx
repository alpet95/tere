import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { PaginationOptions, AutoplayOptions } from "swiper/types";

import { addGreenToHeading } from "@/helpers/utilities";

import classes from "./Benefits.module.scss";

const Benefits = () => {
  const heading = "Tere Benefits";
  const formattedHeading = addGreenToHeading(heading);

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

  const slides = [
    {
      id: "slide-1",
      image: {
        src: "/images/benefits/benefits-image-1.png",
        alt: "Benefits Image 1",
      },
      text: {
        title: {
          span: "01. ",
          text: "Flexible working hours",
        },
        description:
          "You can decide when, and how much time you want to drive.",
      },
    },
    {
      id: "slide-2",
      image: {
        src: "/images/benefits/benefits-image-2.png",
        alt: "Benefits Image 2",
      },
      text: {
        title: {
          span: "02. ",
          text: "Earnings",
        },
        description: "By driving with tere you can earn more.",
      },
    },
    {
      id: "slide-3",
      image: {
        src: "/images/benefits/benefits-image-3.png",
        alt: "Benefits Image 3",
      },
      text: {
        title: {
          span: "03. ",
          text: "Customer support 24/7",
        },
        description:
          "Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!",
      },
    },
  ];

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
          // autoHeight
        >
          {slides.map((slide) => {
            const key = slide.id;
            const src = slide.image.src;
            const alt = slide.image.alt;
            const title = slide.text.title.text;
            const span = slide.text.title.span;
            const description = slide.text.description;

            return (
              <SwiperSlide key={key} className={classes["swiper-item"]}>
                <h4 className={classes["swiper-item-title"]}>
                  <span>{span}</span>
                  {title}
                </h4>
                <Image
                  className={classes["swiper-item-image"]}
                  src={src}
                  alt={alt}
                  width={225}
                  height={173}
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
    </section>
  );
};

export default Benefits;
