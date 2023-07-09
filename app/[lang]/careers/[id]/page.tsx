"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { openPositions } from "@/views/Careers/open-positions";
import { BurgerMenu } from "@/shared/BurgerMenu";
import { ArrowLeft } from "@/shared/icons";
import { Routes, useNavigation } from "@/views/routes";
import { useCareersDictionary } from "@/views/Careers/dictionaries/useCareersDictionary";
import Image from "next/image";
import { Button } from "@/shared";

export default function OpenPosition() {
  const params = useParams();

  const { back, cta, recruiterPosition } = useCareersDictionary();
  const { navigateTo } = useNavigation();

  const job = openPositions.find((position) => position.slug === params.id);

  if (!job) return null;

  return (
    <>
      <main className="w-full mt-40 flex flex-col sm:flex-row gap-x-6 justify-center items-start px-4">
        <section className="layout sm:mb-20 w-full md:w-1/2">
          <Link
            href={navigateTo(Routes.Careers)}
            className="flex items-center gap-x-2"
          >
            <ArrowLeft className="w-4 h-4" /> {back}
          </Link>

          <h1 className="text-h2 mt-12">{job.name}</h1>

          <p className="text-lg mt-8 md:w-1/2">{job.description}</p>

          <div className="flex flex-col mt-20 mb-8">
            {job.responsibilities.length > 0 && (
              <div>
                <h3 className="font-bold text-lg">Your responsibilities</h3>
                <ul className="mt-4">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="leading-loose">
                      - {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-lg">Requirements</h3>
                <ul className="mt-4">
                  {job.requirements.map((responsibility, index) => (
                    <li key={index} className="leading-loose">
                      - {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <div className="sticky top-40 md:max-w-[350px] flex flex-col w-full p-5 rounded-2xl bg-palette-black mb-5 sm:mb-0 mt-5 md:mt-0 z-10">
          <div className="flex items-center gap-x-4 mb-9">
            <Image
              src="/gabi-filipczyk.png"
              alt="Image of Gabi Filipczyk - IT Recruiter"
              width={68}
              height={68}
            />
            <div className="flex flex-col gap-x-1">
              <p className="font-bold text-white">Gabi Filipczyk</p>
              <p className="text-xs opacity-60 text-white">
                {recruiterPosition}
              </p>
            </div>
          </div>

          <Button
            width="full"
            variant="secondary"
            externalLink="https://www.linkedin.com/in/gabriela-filipczyk-026890235/"
          >
            {cta}
          </Button>
        </div>
      </main>

      <BurgerMenu />
    </>
  );
}
