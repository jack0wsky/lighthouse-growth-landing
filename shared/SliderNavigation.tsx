import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import { ArrowLeft, ArrowRight } from "@/shared/icons";

interface SliderNavigationProps {
  swiperRef: SwiperClass;
  currentSlide: number;
  items: any[];
}

export const SliderNavigation = ({
  swiperRef,
  currentSlide,
  items,
}: SliderNavigationProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <button
        className={classNames(
          "w-12 h-12 rounded-full flex justify-center items-center",
          {
            "bg-palette-yellow": currentSlide !== 0,
            "bg-gray-300": currentSlide === 0,
          }
        )}
        disabled={currentSlide === 0}
        onClick={() => swiperRef.slidePrev()}
      >
        <ArrowLeft className="text-palette-black text-2xl group-disabled:text-white" />
      </button>
      <div className="flex items-center gap-x-1.5">
        {items.map((_, index) => (
          <div
            key={index}
            className={classNames(
              "h-2.5 w-2.5 bg-palette-yellow rounded-full",
              {
                "opacity-100": index === currentSlide,
                "opacity-20": index !== currentSlide,
              }
            )}
          />
        ))}
      </div>
      <button
        className={classNames(
          "w-12 h-12 rounded-full flex justify-center items-center",
          {
            "bg-palette-yellow": currentSlide !== items.length - 1,
            "bg-gray-300": currentSlide === items.length - 1,
          }
        )}
        disabled={currentSlide === items.length - 1}
        onClick={() => swiperRef?.slideNext()}
      >
        <ArrowRight className="text-palette-black text-2xl group-disabled:text-white" />
      </button>
    </div>
  );
};
