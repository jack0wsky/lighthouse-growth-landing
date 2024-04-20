import { ContactPage } from "@/views/Contact/Contact";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/shared/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default ContactPage;
