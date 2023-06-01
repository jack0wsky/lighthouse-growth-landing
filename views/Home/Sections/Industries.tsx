import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/views/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

interface IndustryProps {
  name: string;
  href: Routes;
  illustration: ReactNode;
}
const Industry = ({ name, href, illustration }: IndustryProps) => {
  return (
    <li className="h-[370px] list-none w-full bg-palette-grey-200 rounded-xl pt-4">
      <Link href={href} className="w-full h-full flex flex-col justify-between">
        <div className="h-max flex justify-center items-center">
          {illustration}
        </div>
        <div className="flex flex-col justify-between p-5">
          <h3 className="text-1.75 font-medium">{name}</h3>
          <p>See projects</p>
        </div>
      </Link>
    </li>
  );
};

export const Industries = () => {
  return (
    <section className="layout pt-24 pb-14">
      <h2 className="text-h2">Industries</h2>

      <div className='md:hidden mt-12'>
        <Swiper spaceBetween={30} slidesPerView={1.5}>
          <SwiperSlide>
            <Industry
              name="Streaming & Telecoms"
              href={Routes.Streaming}
              illustration={
                <Image
                  src="/streaming.png"
                  height={200}
                  width={189}
                  alt="streaming & telecoms illustration"
                />
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Industry
              name="eCommerce"
              href={Routes.Ecommerce}
              illustration={
                <Image
                  src="/ecommerce.png"
                  width={255}
                  height={183}
                  alt="e-commerce illustration"
                />
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Industry
              name="Logistics"
              href={Routes.Logistics}
              illustration={
                <Image
                  src="/logistics.png"
                  width={254}
                  height={142}
                  alt="e-commerce illustration"
                />
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Industry
              name="ERP / SAP"
              href={Routes.Sap}
              illustration={
                <Image
                  src="/sap.png"
                  width={235}
                  height={134}
                  alt="e-commerce illustration"
                />
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <ul className="w-full hidden md:flex items-center gap-x-8 mt-12">
        <Industry
          name="Streaming & Telecoms"
          href={Routes.Streaming}
          illustration={
            <Image
              src="/streaming.png"
              height={200}
              width={189}
              alt="streaming & telecoms illustration"
            />
          }
        />

        <Industry
          name="eCommerce"
          href={Routes.Ecommerce}
          illustration={
            <Image
              src="/ecommerce.png"
              width={255}
              height={183}
              alt="e-commerce illustration"
            />
          }
        />

        <Industry
          name="Logistics"
          href={Routes.Logistics}
          illustration={
            <Image
              src="/logistics.png"
              width={254}
              height={142}
              alt="e-commerce illustration"
            />
          }
        />

        <Industry
          name="ERP / SAP"
          href={Routes.Sap}
          illustration={
            <Image
              src="/sap.png"
              width={235}
              height={134}
              alt="e-commerce illustration"
            />
          }
        />
      </ul>
    </section>
  );
};
