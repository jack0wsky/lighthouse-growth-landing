import { Button } from "@/shared";
import { Routes } from "@/views/routes";
import { Technologies } from "@/views/Home/Sections/Technologies";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";

export const AboutUs = () => {
  const { aboutUs } = useHomeDictionary();

  return (
    <section className="w-full flex justify-center bg-palette-grey-200 pt-11 pb-[150px]">
      <div className="layout">
        <h2 className="text-h2">{aboutUs.title}</h2>

        <div className="mt-12 flex flex-wrap gap-x-32 gap-y-10 w-full pb-12">
          {aboutUs.descriptions.map((text, index) => (
            <p key={index} className="w-[450px] text-xl">
              {text}
            </p>
          ))}
        </div>

        <Button width="max" href={Routes.Contact}>
          {aboutUs.cta}
        </Button>

        <Technologies />
      </div>
    </section>
  );
};
