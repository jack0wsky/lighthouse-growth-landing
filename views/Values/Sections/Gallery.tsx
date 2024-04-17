"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.css";
import { Media } from "@/types/cms-content";
import { CMS_BASE_URL } from "@/config";

interface GalleryItemProps {
  path: string;
  objectPosition: string;
  alt: string;
  priority: boolean;
}
const GalleryItem = ({
  path,
  alt,
  objectPosition,
  priority,
}: GalleryItemProps) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px]">
      <Image
        src={path}
        style={{ objectFit: "cover", objectPosition }}
        fill
        alt={alt}
        priority={priority}
      />
    </div>
  );
};

interface GalleryProps {
  images: Media[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={36}
        breakpoints={{
          400: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3.2,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <GalleryItem
              path={CMS_BASE_URL + image.attributes.url}
              objectPosition="center"
              alt=""
              priority={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute h-2/5 bg-palette-grey-200 top-0" />
    </div>
  );
};
