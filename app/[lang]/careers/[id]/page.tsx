"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { openPositions } from "@/views/Careers/open-positions";
import { BurgerMenu } from "@/shared/BurgerMenu";
import { ArrowLeft } from "@/shared/icons";
import { Routes, useNavigation } from "@/views/routes";
import { useCareersDictionary } from "@/views/Careers/dictionaries/useCareersDictionary";

export default function OpenPosition() {
  const params = useParams();

  const { back } = useCareersDictionary();
  const { navigateTo } = useNavigation();

  const job = openPositions.find((position) => position.slug === params.id);

  if (!job) return null;

  return (
    <>
      <main className="w-full mt-40 flex flex-col items-center">
        <section className="layout w-full mb-20">
          <Link href={navigateTo(Routes.Careers)} className="flex items-center gap-x-2">
            <ArrowLeft className="w-4 h-4" /> {back}
          </Link>

          <h1 className="text-h2 mt-12">{job.name}</h1>

          <p className="text-lg mt-8 w-full md:w-1/2">{job.description}</p>

          <div className="flex flex-col w-full mt-20 mb-8">
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
                <ul className="mt-4 w-full md:w-3/4">
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
      </main>

      <BurgerMenu />
    </>
  );
}
