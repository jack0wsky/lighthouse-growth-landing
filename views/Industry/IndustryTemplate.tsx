"use client";

import { ArrowLeft, ArrowRight } from "@/shared/icons";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import { ProjectTemplate } from "@/views/Industry/ProjectTemplate";
import { BurgerMenu } from "@/shared/BurgerMenu";
import React, { useState, ReactNode } from "react";
import { Project } from "@/views/Industry/types";
import "swiper/swiper.css";
import classNames from "classnames";

interface SliderNavigationProps {
  swiperRef: SwiperClass;
  currentSlide: number;
  items: any[];
}

const SliderNavigation = ({
  swiperRef,
  currentSlide,
  items,
}: SliderNavigationProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <button
        className="w-12 h-12 rounded-full bg-palette-black flex justify-center items-center disabled:bg-gray-300"
        disabled={currentSlide === 0}
        onClick={() => swiperRef.slidePrev()}
      >
        <ArrowLeft className="text-white text-xl" />
      </button>
      <div className="flex items-center gap-x-1.5">
        {items.map((_, index) => (
          <div
            key={index}
            className={classNames("h-2.5 w-2.5 bg-black rounded-full", {
              "opacity-100": index === currentSlide,
              "opacity-20": index !== currentSlide,
            })}
          />
        ))}
      </div>
      <button
        className="w-12 h-12 rounded-full bg-palette-black flex justify-center items-center disabled:bg-gray-300"
        disabled={currentSlide === items.length - 1}
        onClick={() => swiperRef?.slideNext()}
      >
        <ArrowRight className="text-white text-xl" />
      </button>
    </div>
  );
};

interface IndustriesTemplateProps {
  title: string;
  projects: Project[];
  illustration: ReactNode;
}

export const IndustryTemplate = ({
  title,
  projects,
  illustration,
}: IndustriesTemplateProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <main className="layout">
        <div className="mt-32 mb-32">
          <div className="md:h-[50vh] md:bg-palette-grey-200 flex items-center justify-between overflow-hidden rounded-xl md:pl-20">
            <h1
              className="text-h1"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {illustration}
          </div>

          <div className="flex items-center justify-between mt-20">
            <h2 className="text-h2 font-medium">Projects</h2>
            {projects.length > 1 && !!swiperRef && (
              <SliderNavigation
                swiperRef={swiperRef}
                currentSlide={currentSlide}
                items={projects}
              />
            )}
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Controller, Navigation]}
            controller={{ control: "test" }}
            onInit={setSwiperRef}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex);
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectTemplate {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

      <BurgerMenu />
    </>
  );
};
