import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

interface GalleryItemProps {
  path: string;
  alt: string;
}
const GalleryItem = ({ path, alt }: GalleryItemProps) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[500px]">
      <Image src={path} style={{ objectFit: "cover" }} fill alt={alt} />
    </div>
  );
};

export const Gallery = () => {
  return (
    <Swiper
      spaceBetween={36}
      breakpoints={{
        400: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2.9,
        },
      }}
    >
      <SwiperSlide>
        <GalleryItem
          path="/team-photos/2.webp"
          alt="photo with couple pizzas"
        />
      </SwiperSlide>
      <SwiperSlide>
        <GalleryItem path="/team-photos/1.webp" alt="photo of our team" />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          path="/team-photos/3.webp"
          alt="photo of Jakub and Gabi talking"
        />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          path="/team-photos/4.webp"
          alt="photo from conference event"
        />
      </SwiperSlide>

      <SwiperSlide>
        <GalleryItem
          path="/team-photos/5.webp"
          alt="chillout with two beers after work"
        />
      </SwiperSlide>
    </Swiper>
  );
};
