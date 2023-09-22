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

interface Image {
  path: string;
  position: "center" | "top";
  alt: string;
}
const images: Image[] = [
  { path: "13.webp", position: "center", alt: "Mike and Jakub on IBC2023" },
  { path: "14.webp", position: "center", alt: "Jakub on IBC2023" },
  { path: "15.webp", position: "center", alt: "IBC2023 and badges" },
  { path: "16.webp", position: "center", alt: "" },
  { path: "17.webp", position: "center", alt: "Mike and Jakub" },
  { path: "18.webp", position: "center", alt: "" },
  { path: "19.webp", position: "center", alt: "" },
  { path: "2.webp", position: "center", alt: "photo with couple pizzas" },
  { path: "1.webp", position: "center", alt: "photo of our team" },
  { path: "3.webp", position: "top", alt: "photo of Jakub and Gabi talking" },
  { path: "4.webp", position: "center", alt: "photo from conference event" },
  {
    path: "5.webp",
    position: "center",
    alt: "chillout with two beers after work",
  },
  {
    path: "6.webp",
    position: "center",
    alt: "badge on a conference",
  },
  { path: "7.webp", position: "center", alt: "view from plane" },
  { path: "8.webp", position: "center", alt: "Jakub Szudejko - COO" },
  {
    path: "9.webp",
    position: "center",
    alt: "image from Las Vegas Convention Center",
  },
  {
    path: "10.webp",
    position: "center",
    alt: "Mike and Jakub in Dubrovnik",
  },
  { path: "11.webp", position: "center", alt: "Jakub Szudejko - on a meeting" },
  { path: "olivia.webp", position: "center", alt: "Olivia Business Center" },
];

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
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute h-2/5 bg-palette-grey-200 top-0" />
    </div>
  );
};
