"use client";

import { streamingProjects } from "@/views/Industry/streaming-projects";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import Image from "next/image";

export default function Streaming() {
  return (
    <IndustryTemplate
      title={`Streaming<br />& Telecoms`}
      projects={streamingProjects}
      illustration={
        <Image
          src="/streaming-large.png"
          width={491}
          height={516}
          className='hidden md:flex'
          alt="illustration for streaming projects"
        />
      }
    />
  );
}
