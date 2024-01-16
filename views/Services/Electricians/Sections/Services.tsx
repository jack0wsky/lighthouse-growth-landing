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

  const airSystems = [
    "Rekuperacja",
    "Wentylacja bytowa",
    "Odpylanie",
    "Instalacje filtrowentylacyjne",
    "Wentylacje pomieszczeń typu Clean Room",
  ];

  const airSystemsServices = [
    "Montaż instalacji oraz serwis na małych i dużych obiektach",
    "Diagnoza usterek układu",
    "Konserwacja",
  ];

  return (
    <section className="w-full flex justify-center pt-11 pb-20 md:pb-[150px]">
      <div className="layout">
        <h2 className="text-h2">{title}</h2>

        <div className="flex flex-col md:flex-row justify-between gap-x-12 items-start mt-12">
          <Image
            src="/services/electrician-services.png"
            className="rounded-xl"
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

        <div className="mt-20">
          <div className="mt-14 w-full flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-[500px] h-[260px] relative mr-12">
              <Image
                src="/services/electrician-air.png"
                alt="electrician air condition"
                className="object-cover rounded-xl"
                fill
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl md:text-3xl mt-3 md:mt-0">
                Systemy wentylacyjne
              </h3>
              <p className="w-full md:w-[410px] mt-5">
                Realizacje związane z instalacją systemów wentylacyjnych
                wykonujemy zarówno w budynkach i lokalach komercyjnych, jak i w
                domach prywatnych inwestorów
              </p>

              <ul className="mt-6 ml-5">
                {airSystemsServices.map((item, index) => (
                  <li key={index} className="list-disc text-md">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-xl">
                  Systemy wentylacyjne jakie obsługujemy to:
                </p>
                <ul className="mt-3">
                  {airSystems.map((item, index) => (
                    <li key={index} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
