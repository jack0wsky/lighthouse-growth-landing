import { AboutUs, Hero } from "@/views/Home/Sections";
import {BurgerMenu} from "@/shared/BurgerMenu";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <BurgerMenu />
    </>
  );
};
