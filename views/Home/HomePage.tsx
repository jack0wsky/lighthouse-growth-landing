import {
  AboutUs,
  Hero,
  Industries,
  Testimonials,
  ContactUs,
} from "@/views/Home/Sections";
import { BurgerMenu } from "@/shared/BurgerMenu";

interface HomePageProps {
  title: string;
  description: string;
}
export const HomePage = async ({ title, description }: HomePageProps) => {
  return (
    <>
      <Hero title={title} description={description} />
      <AboutUs />
      <Industries />
      <Testimonials />
      <ContactUs />

      <BurgerMenu />
    </>
  );
};
