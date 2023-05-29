import { Button } from "@/shared";
import { Routes } from "@/views/routes";
import { Technologies } from "@/views/Home/Sections/Technologies";

export const AboutUs = () => {
  return (
    <section className="w-full flex justify-center bg-palette-grey-200 pt-11 pb-[150px]">
      <div className="layout">
        <h2 className="text-h2">Who we are</h2>

        <div className="mt-12 flex flex-wrap gap-x-32 gap-y-10 w-full pb-12">
          <p className="w-[450px] text-xl">
            We offer both product development and staff augmentation as a
            flexible option to use our consultants to extend your core team and
            speed up your projects.
          </p>

          <p className="w-[450px] text-xl">
            We provide an access to the large pool of IT Engineers based in
            Poland, where industry giants like Intel, Box, Microsoft, Google and
            NVIDIA locate their R&D centers.
          </p>

          <p className="w-[450px] text-xl">
            Option to set up a complete team or engineering branch of your
            company, including permanent recruitment support with 3 month
            guarantee.
          </p>
        </div>

        <Button width="max" href={Routes.Contact}>
          Tell us your needs
        </Button>

        <Technologies />
      </div>
    </section>
  );
};
