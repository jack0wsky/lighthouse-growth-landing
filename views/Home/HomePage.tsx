import {
  AboutUs,
  Hero,
  Industries,
  Testimonials,
  ContactUs,
} from "@/views/Home/Sections";
import { BurgerMenu } from "@/shared/BurgerMenu";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Industries />
      <Testimonials />
      <ContactUs />

      <BurgerMenu />
    </>
  );
};
