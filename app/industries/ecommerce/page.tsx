"use client";

import { IndustryTemplate } from "@/views/Industry/IndustryTemplate";
import { ecommerceProjects } from "@/views/Industry/ecomerce-projects";

export default function Ecommerce() {
  return <IndustryTemplate title="eCommerce" projects={ecommerceProjects} />;
}
