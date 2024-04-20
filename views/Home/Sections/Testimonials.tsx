"use client";

import ReactMarkdown from "react-markdown";
import { useHomeDictionary } from "@/views/Home/dictionaries/useHomeDictionary";
import { useListTestimonials } from "@/views/Home/api/testimonials.controller";

interface TestimonialProps {
  content: any;
  position: string;
  author: string;
}

const Testimonial = ({ content, author, position }: TestimonialProps) => {
  return (
    <li className="w-full md:min-h-[300px] p-5 rounded-xl bg-palette-grey-200 flex flex-col justify-between">
      <ReactMarkdown>{content}</ReactMarkdown>

      <div className="mt-6 md:mt-0">
        <p className="font-medium text-palette-black">{author}</p>
        <p className="text-palette-grey-300">{position}</p>
      </div>
    </li>
  );
};
export const Testimonials = () => {
  const { testimonials } = useHomeDictionary();

  const { testimonialsList, loading, error } = useListTestimonials();

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

      {loading && (
        <ul className="mt-12 flex flex-col md:flex-row items-center gap-5">
          <div className="w-full bg-palette-grey-200 animate-pulse h-[200px]" />
          <div className="w-full bg-palette-grey-200 animate-pulse h-[200px]" />
          <div className="w-full bg-palette-grey-200 animate-pulse h-[200px]" />
        </ul>
      )}

      {!loading && !!testimonialsList.length && (
        <ul className="mt-12 flex flex-col md:flex-row items-center gap-5">
          {testimonialsList.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              content={testimonial.attributes.content}
              position={`${testimonial.attributes.position} at ${testimonial.attributes.company}`}
              author={testimonial.attributes.author}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
