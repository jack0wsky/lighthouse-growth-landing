"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/shared/icons";
import { ProjectTemplate } from "@/views/Industry/ProjectTemplate";
import { streamingProjects } from "@/views/Industry/streaming-projects";
import { Controller } from "swiper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { BurgerMenu } from "@/shared/BurgerMenu";

export default function Streaming() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <>
      <main className="layout">
        <div className="mt-32 mb-32">
          <h1 className="text-h1">Streaming</h1>

          <div className="flex items-center justify-between mt-20">
            <h2 className="text-h2 font-medium">Projects</h2>
            <div className="flex items-center gap-x-8">
              <button
                className="w-10 h-10 rounded-full bg-palette-black flex justify-center items-center"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeft className="text-white text-xl" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-palette-black flex justify-center items-center"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRight className="text-white text-xl" />
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Controller]}
            controller={{ control: "test" }}
            onInit={(swiper) => (swiperRef.current = swiper)}
          >
            {streamingProjects.map((project, index) => {
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
}
