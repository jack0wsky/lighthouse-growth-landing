"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { ecommerceProjects } from "@/views/Industry/ecomerce-projects";
import Image from "next/image";

export default function Ecommerce() {
  return (
    <IndustryTemplate
      title="eCommerce"
      illustration={
        <Image
          src="/ecommerce-large.png"
          width={500}
          height={500}
          className='hidden md:flex'
          alt="ecommerce illustration"
        />
      }
      projects={ecommerceProjects}
    />
  );
}
