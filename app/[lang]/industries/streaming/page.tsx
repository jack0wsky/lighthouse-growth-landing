"use client";

import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";
import { useListProjects } from "@/views/Industry/api/projects.controller";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";

export default function Streaming() {
  const { titles } = useIndustryDictionary();

  const { projects } = useListProjects("streaming");

  return (
    <IndustryTemplate
      title={titles.streaming}
      projects={projects}
      illustration={
        <Image
          src="/streaming-large.png"
          width={491}
          height={516}
          className="hidden md:flex"
          alt="illustration for streaming projects"
        />
      }
    />
  );
}
