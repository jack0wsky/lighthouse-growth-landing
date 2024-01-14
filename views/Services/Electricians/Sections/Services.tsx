"use client";
import { useServicesDictionary } from "@/views/Services/dictionaries/useServicesDictionary";
import Image from "next/image";

export const Services = () => {
  const { title } = useServicesDictionary();

  const services = [
    {
      groupName: "Instalacje elektryczne",
      items: [
        "Budowa nowych, modernizacja istniejących oraz naprawa uszkodzonych instalacji",
        "Przyłącza elektryczne",
        "Instalacje odgromowe i uziemiające",
      ],
    },
    {
      groupName: "Montaż i modernizacja",
      items: [
        "Montaż tras kablowych/systemów prowadzenia kabli",
        "Montaż rozdzielnic elektrycznych",
        "Modernizacja szaf sterowniczych",
      ],
    },
    {
      groupName: "Systemy zasilania i pomiary",
      items: [
        "Pomiary elektryczne z zastosowaniem kamery termowizyjnej",
        "Systemy zasilania gwarantowanego",
      ],
    },
    {
      groupName: "Oświetlenie",
      items: ["Oświetlenie wewnętrzne i zewnętrzne obiektów"],
    },
  ];

  return (
    <section className="w-full flex justify-center pt-11 pb-20 md:pb-[150px]">
      <div className="layout">
        <h2 className="text-h2">{title}</h2>

        <div className='flex flex-col md:flex-row justify-between gap-x-12 items-start mt-12'>
          <Image
            src="/services/electrician-services.png"
            className='rounded-xl'
            width={500}
            height={300}
            alt=""
          />

          <ul className="grid grid-cols-1 gap-x-24 gap-y-11 mt-9 md:mt-0">
            {services.map((service) => (
              <li key={service.groupName} className="w-full">
                <h3 className="font-bold text-2xl md:text-3xl">
                  {service.groupName}
                </h3>

                <ul className="mt-5 flex flex-col gap-y-4">
                  {service.items.map((item, index) => (
                    <p key={index} className="font-base text-base md:text-lg">
                      {item}
                    </p>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
