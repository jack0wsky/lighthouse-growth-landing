"use client";
import { Metadata } from "next";

import { CareersPage } from "@/views/Careers/CareersPage";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default CareersPage;
