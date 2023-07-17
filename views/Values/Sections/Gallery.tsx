import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.css";

interface GalleryItemProps {
  path: string;
  objectPosition: string;
  alt: string;
}
const GalleryItem = ({ path, alt, objectPosition }: GalleryItemProps) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px]">
      <Image
        src={path}
        style={{ objectFit: "cover", objectPosition }}
        fill
        alt={alt}
      />
    </div>
  );
};

export const Gallery = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1800 }}
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
      <SwiperSlide>
        <GalleryItem
          path="/team-photos/2.webp"
          objectPosition="center"
          alt="photo with couple pizzas"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem
          path="/team-photos/1.webp"
          alt="photo of our team"
          objectPosition="center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          objectPosition="top"
          path="/team-photos/3.webp"
          alt="photo of Jakub and Gabi talking"
        />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          objectPosition="center"
          path="/team-photos/4.webp"
          alt="photo from conference event"
        />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          objectPosition="center"
          path="/team-photos/5.webp"
          alt="chillout with two beers after work"
        />
      </SwiperSlide>
    </Swiper>
  );
};
