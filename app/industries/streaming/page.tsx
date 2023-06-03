"use client";

import { streamingProjects } from "@/views/Industry/streaming-projects";
import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";

export default function Streaming() {
  return (
    <IndustryTemplate
      title="Streaming & Telecoms"
      projects={streamingProjects}
    />
  );
}
