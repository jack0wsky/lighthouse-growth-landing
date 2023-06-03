"use client";

import { ArrowLeft, ArrowRight } from "@/shared/icons";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import { ProjectTemplate } from "@/views/Industry/ProjectTemplate";
import { BurgerMenu } from "@/shared/BurgerMenu";
import { useEffect, useRef, useState } from "react";
import { Project } from "@/views/Industry/types";
import "swiper/swiper.css";
import classNames from "classnames";

interface IndustriesTemplateProps {
  title: string;
  projects: Project[];
}

export const IndustryTemplate = ({
  title,
  projects,
}: IndustriesTemplateProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <main className="layout">
        <div className="mt-32 mb-32">
          <h1 className="text-h1">{title}</h1>

          <div className="flex items-center justify-between mt-20">
            <h2 className="text-h2 font-medium">Projects</h2>
            {projects.length > 1 && (
              <div className="flex items-center gap-x-4">
                <button
                  className="w-10 h-10 rounded-full bg-palette-black flex justify-center items-center"
                  onClick={() => swiperRef?.slidePrev()}
                >
                  <ArrowLeft className="text-white text-xl" />
                </button>
                <div className="flex items-center gap-x-1.5">
                  {projects.map((_, index) => (
                    <div
                      key={index}
                      className={classNames(
                        "h-2.5 w-2.5 bg-black rounded-full",
                        {
                          "opacity-100": index === currentSlide,
                          "opacity-20": index !== currentSlide,
                        }
                      )}
                    />
                  ))}
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-palette-black flex justify-center items-center"
                  onClick={() => swiperRef?.slideNext()}
                >
                  <ArrowRight className="text-white text-xl" />
                </button>
              </div>
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
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectTemplate {...project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </main>

      <BurgerMenu />
    </>
  );
};
