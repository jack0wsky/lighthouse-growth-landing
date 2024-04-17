import { BurgerMenu } from "@/shared/BurgerMenu";
import { ContactUs } from "@/views/Home/Sections";
import { ValuesList } from "@/views/Values/Sections/ValuesList";
import { Gallery } from "@/views/Values/Sections/Gallery";
import { CompanyValue, Media } from "@/types/cms-content";

interface ValuesPageProps {
  title: string;
  introduction: string;
  images: Media[];
}
export const ValuesPage = ({
  title,
  introduction,
  images,
}: ValuesPageProps) => {
  return (
    <>
      <main className="flex w-full flex-col items-center mt-40">
        <section className="w-full relative">
          <div className="w-full flex justify-center pb-11">
            <div className="layout">
              <h1 className="text-h1">{title}</h1>
              <p className="w-full sm:w-3/4 mt-8">{introduction}</p>
            </div>
          </div>

          <ValuesList />

          <Gallery images={images} />
        </section>

        <ContactUs />
      </main>

      <BurgerMenu />
    </>
  );
};
