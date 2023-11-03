import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { images } from "@/views/Values/Sections/images";
import "swiper/swiper.css";

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

export const Gallery = () => {
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
          <SwiperSlide key={image.path}>
            <GalleryItem
              path={`/team-photos/${image.path}`}
              objectPosition={image.position}
              alt={image.alt}
              priority={image.hasPriority}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute h-2/5 bg-palette-grey-200 top-0" />
    </div>
  );
};
