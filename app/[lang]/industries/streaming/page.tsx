"use client";

import { streamingProjects } from "@/views/Industry/streaming-projects";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import Image from "next/image";
import { useIndustryDictionary } from "@/views/Industry/dictionaries/useIndustryDictionary";

export default function Streaming() {
  const { titles } = useIndustryDictionary();

  return (
    <IndustryTemplate
      title={titles.streaming}
      projects={streamingProjects}
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
