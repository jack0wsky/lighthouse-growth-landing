import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";

interface TestimonialProps {
  content: any;
  position: string;
  author: string;
}
const Testimonial = ({ content, author, position }: TestimonialProps) => {
  return (
    <li className="w-full md:min-h-[300px] p-5 rounded-xl bg-palette-grey-200 flex flex-col justify-between">
      {content}

      <div className="mt-6 md:mt-0">
        <p className="font-medium text-palette-black">{author}</p>
        <p className="text-palette-grey-300">{position}</p>
      </div>
    </li>
  );
};
export const Testimonials = () => {
  const { testimonials } = useHomeDictionary();

  return (
    <section className="layout pb-24 mt-14">
      <div className="flex flex-col sm:flex-row gap-x-6 sm:items-end">
        <h2
          className="text-h2"
          dangerouslySetInnerHTML={{ __html: testimonials.title }}
        />
        <div
          className="clutch-widget mt-8 sm:mt-0"
          data-url="https://widget.clutch.co"
          data-widget-type="1"
          data-height="40"
          data-nofollow="true"
          data-expandifr="true"
          data-scale="100"
          data-clutchcompany-id="1901531"
        />
      </div>

      <ul className="mt-12 flex flex-col md:flex-row items-center gap-5">
        <Testimonial
          content={
            <p className="italic text-xl">
              “Lighthouse growth’s talent is{" "}
              <span className="font-medium">comparable to US developers</span>{" "}
              and more budget-friendly.”
            </p>
          }
          position="CEO at Invision Source"
          author="Carla Virola"
        />

        <Testimonial
          content={
            <p className="italic text-xl">
              “The Lighthouse growth team was able to deliver incredible
              candidates in a timely manner. The team was competent and showed
              great expertise and professionalism throughout the collaboration.”
            </p>
          }
          position="Team Leader at Pearl Group"
          author="Pavels Koliskins"
        />

        <Testimonial
          content={
            <p className="italic text-xl">
              I was most impressed by Lighthouse growth’s ability to find
              qualified candidates quickly.
            </p>
          }
          position="Manager at Swedish streaming platform"
          author="Julien T."
        />
      </ul>
    </section>
  );
};
