import { ContactHero } from "@/views/Contact/Sections/ContactHero";
import { Offices } from "@/views/Contact/Sections/Offices";
import { BurgerMenu } from "@/shared/BurgerMenu";

export const ContactPage = () => {
  return (
    <main className="bg-palette-grey-200 pb-[100px] w-full">
      <ContactHero />
      <Offices />

      <BurgerMenu />
    </main>
  );
};
