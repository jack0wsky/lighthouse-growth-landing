"use client";

import { useState, ReactNode } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useParams } from "next/navigation";
import { ProjectTemplate } from "@/views/Industry/ProjectTemplate";
import { BurgerMenu } from "@/shared/BurgerMenu";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import { Languages } from "@/shared/dictionaries/languages";
import { SliderNavigation } from "@/shared/SliderNavigation";
import { ProjectModel } from "@/types/cms-content";
import "swiper/css";

interface IndustriesTemplateProps {
  title: string;
  projects: ProjectModel[];
  illustration: ReactNode;
}

export const IndustryTemplate = ({
  title,
  illustration,
  projects,
}: IndustriesTemplateProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { projectsTitle } = useIndustryDictionary();

  return (
    <>
      <main className="layout">
        <div className="mt-32 mb-32">
          <div className="md:h-[50vh] md:bg-palette-grey-200 flex items-center justify-between overflow-hidden rounded-xl md:px-20">
            <h1
              className="text-h1"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {illustration}
          </div>

          <div className="flex items-center gap-x-8 mt-20">
            <h2 className="text-h2 font-medium">{projectsTitle}</h2>
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
            slidesPerView={projects.length > 1 ? 1.1 : 1}
            modules={[Pagination, Mousewheel]}
            onInit={setSwiperRef}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex);
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.1,
              releaseOnEdges: true,
            }}
            pagination={{ clickable: true }}
          >
            {projects.map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectTemplate project={project.attributes} />
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
