import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { PaginationOptions, AutoplayOptions } from "swiper/types";

import { addGreenToHeading } from "@/helpers/utilities";
import phoneImageSrc from "/public/images/phone-image.png";
import classes from "./HowItWorks.module.scss";

const HowItWorks = () => {
  const slides = [
    {
      id: "slide-1",
      image: {
        src: "/images/bullets/bullet-image-1.png",
        alt: "Bullet Image 1",
      },
      text: {
        title: "Request a ride",
        description:
          "Have to reach office or going for shopping? Just put your current location and destination and search a ride that suits you",
      },
    },
    {
      id: "slide-2",
      image: {
        src: "/images/bullets/bullet-image-2.png",
        alt: "Bullet Image 2",
      },
      text: {
        title: "Publish a ride",
        description:
          "Going somewhere but hate to travel alone - just post your ride details and publish it",
      },
    },
    {
      id: "slide-3",
      image: {
        src: "/images/bullets/bullet-image-3.png",
        alt: "Bullet Image 3",
      },
      text: {
        title: "Instant notifications",
        description:
          "Get instant notifications for your rides and be in contact with fellow riders all the time",
      },
    },
    {
      id: "slide-4",
      image: {
        src: "/images/bullets/bullet-image-4.png",
        alt: "Bullet Image 4",
      },
      text: {
        title: "Cashless payment",
        description:
          "Payment made easy by using your own Wallet - no more cash to carry",
      },
    },
  ];

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

  const heading = "How Tere works";
  const formattedHeading = addGreenToHeading(heading);

  return (
    <section className={classes.section}>
      <h2
        className={classes.heading}
        dangerouslySetInnerHTML={{ __html: formattedHeading }}
      ></h2>
      <p className={classes.description}>
        Download and install the tere app. Enter your phone number and make your
        user account. when approved you may start driving.
      </p>

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
          <Image src={phoneImageSrc} alt="Slider Phone Image" fill />
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
