import { Services } from "@/views/Services/Electricians/Sections/Services";
import { ContactUs, Testimonials } from "@/views/Home/Sections";
import { AboutUs } from "@/views/Services/Electricians/Sections/AboutUs";
import { Hero } from "@/views/Services/Electricians/Sections/Hero";

export const ElectriciansPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
};
