import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

export const Gallery = () => {
  return (
    <Swiper spaceBetween={28} slidesPerView={3}>
      <SwiperSlide className='h-80 w-80'>
        <Image src="/team-photos/2.webp" fill alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/team-photos/1.webp" fill alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/team-photos/3.webp" fill alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/team-photos/4.webp" height={200} width={300} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/team-photos/5.webp" height={200} width={300} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
