"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Routes, useNavigation } from "@/views/routes";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";
import { useListIndustries } from "@/views/Home/api/industries.controller";
import { useParams } from "next/navigation";
import { CMS_BASE_URL } from "@/config";

interface IndustryProps {
  name: string;
  href: string;
  illustration: ReactNode;
}
const Industry = ({ name, href, illustration }: IndustryProps) => {
  const { industries } = useHomeDictionary();

  return (
    <li className="h-[370px] list-none w-full bg-palette-grey-200 rounded-xl pt-4 hover:-translate-y-2 transition-transform">
      <Link href={href} className="w-full h-full flex flex-col justify-between">
        <div className="h-max flex justify-center items-center">
          {illustration}
        </div>
        <div className="flex flex-col justify-between p-5">
          <h3 className="text-xl sm:text-2xl font-medium">{name}</h3>
          <p>{industries.cta}</p>
        </div>
      </Link>
    </li>
  );
};

export const Industries = () => {
  const { industries } = useHomeDictionary();
  const { navigateTo } = useNavigation();
  const { lang } = useParams();

  const { industriesList } = useListIndustries(lang);

  return (
    <section className="layout pt-24 pb-14">
      <h2 className="text-h2">{industries.title}</h2>

      <div className="md:hidden mt-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.5}
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
        >
          {industriesList.map((industry) => {
            const imagePath =
              CMS_BASE_URL +
              industry.attributes.illustration.data.attributes.url;

            return (
              <SwiperSlide key={industry.id}>
                <Industry
                  name={industry.attributes.title}
                  href={navigateTo(Routes.Streaming)}
                  illustration={
                    <Image
                      src={imagePath}
                      height={200}
                      width={189}
                      alt={industry.attributes.title}
                    />
                  }
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <ul className="w-full hidden md:flex items-center gap-x-8 mt-12">
        {industriesList.map((industry) => {
          const imagePath =
            CMS_BASE_URL + industry.attributes.illustration.data.attributes.url;

          return (
            <Industry
              key={industry.id}
              name={industry.attributes.title}
              href={navigateTo(Routes.Streaming)}
              illustration={
                <Image
                  src={imagePath}
                  height={200}
                  width={189}
                  alt={industry.attributes.title}
                />
              }
            />
          );
        })}
      </ul>
    </section>
  );
};
