"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";
import Image from "next/image";

export const Services = () => {
  const { title, services, ventilation } = useServicesDictionary();

  return (
    <section
      className="w-full flex justify-center pt-11 pb-20 md:pb-[150px]"
      id="services"
    >
      <div className="layout">
        <h2 className="text-h2">{title}</h2>

        <div className="flex flex-col md:flex-row justify-between gap-x-12 items-start mt-12">
          <Image
            src="/services/electrician-services.jpg"
            className="rounded-xl"
            width={500}
            height={300}
            alt=""
          />

          <ul className="grid grid-cols-1 gap-x-24 gap-y-11 mt-9 md:mt-0">
            {services.map((service) => (
              <li key={service.title} className="w-full">
                <h3 className="font-bold text-2xl md:text-3xl">
                  {service.title}
                </h3>

                <ul className="mt-5 flex flex-col gap-y-4">
                  {service.list.map((item, index) => (
                    <p key={index} className="font-base text-base md:text-lg">
                      {item}
                    </p>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 w-full flex flex-col md:flex-row md:items-start">
          <div className="w-full md:w-[500px] h-[260px] relative mr-12">
            <Image
              src="/services/electrician-air.jpg"
              alt="electrician air condition"
              className="object-cover rounded-xl"
              fill
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <h3 className="font-bold text-2xl md:text-3xl mt-3 md:mt-0">
              {ventilation.title}
            </h3>
            <p className="w-full md:w-[410px] mt-5">
              {ventilation.description}
            </p>

            <ul className="mt-6 ml-5">
              {ventilation.list.map((item, index) => (
                <li key={index} className="list-disc text-md w-full">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p>{ventilation.secondDescription}</p>
              <p className="mt-3">{ventilation.thirdDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
