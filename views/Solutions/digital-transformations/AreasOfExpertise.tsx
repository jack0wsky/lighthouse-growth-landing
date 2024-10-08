import { SliderNavigation } from "@/shared/SliderNavigation";
import { useState } from "react";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const slidesContent = [
  {
    title: "IT Consulting Services",
    icon: "🖥️",
    description: (
      <>
        <p>
          We offer the support and expertise needed to navigate complex
          processes, such as digital transformation, but not exclusively. You
          might want to lead your company in adopting new technologies or learn
          which services will best serve your business growth.{" "}
        </p>
        <p className="mt-2">
          Perhaps you need to evaluate the efficiency of your current tech
          background. Our services are designed to help you understand and
          optimize your existing technology infrastructure, ensuring it aligns
          with your business objectives.
        </p>
        <p className="mt-2">
          <b>
            We help business executives get the answers to all IT-related
            questions, enabling them to make optimal, data-driven choices
          </b>
          .
        </p>
      </>
    ),
  },
  {
    title: "SEO Services",
    icon: "🔍",
    description: (
      <>
        <p>SEO is the first step to enhance your brand&apos;s visibility.</p>{" "}
        <p className="mt-2">
          By working with a consultant with perennial digital experience,
          you&apos;ll get access to data, insights, and cost-effective tactics,{" "}
          <b>
            making your website more visible in the content-packed online world
          </b>
          .
        </p>
      </>
    ),
  },
  {
    title: "Data and BI Consulting",
    icon: "📊",
    description: (
      <>
        <p>
          Business Intelligence is about adopting technologies to analyze and
          <b>
            understand data. This helps companies identify trends, define the
            course of their change, and predict upcoming market scenarios.
          </b>
        </p>
        <p className="mt-2">
          Working with a team of experienced data experts and robust BI systems
          supports business leaders driving fundamental change in their
          organizations and quickly adapt to changing business conditions.
        </p>
        <p className="mt-2">
          From one-project data analysis to building a data-based
          decision-making culture, we&apos;ll help you leverage your data.
        </p>
      </>
    ),
  },
  {
    title: "Video Streaming Technology Consulting",
    icon: "🎥",
    description: (
      <>
        <p>
          Video streaming technologies proliferate aggressively. It is hard to
          imagine organizations maintaining a competitive edge and NOT working
          with video technologies.
        </p>
        <p className="mt-2">
          Creating, implementing, or growing technologies supporting this area
          requires expertise in diverse business and IT areas.
        </p>
        <p className="mt-2">
          <b>
            Whether you want to apply new solutions or enforce them to the stack
            of existing services, our consultant will help you develop the best
            output.
          </b>
        </p>
      </>
    ),
  },
  {
    title: "Digital Transformation",
    icon: "🔄",
    description: (
      <>
        <p>
          Digital transformation consulting provides you with services designed
          to... Well, bring digital transformation to your company.
        </p>
        <p className="mt-2">
          We can focus on research and recommendation for solutions best for
          your single business need or robust strategy and digital
          transformation services.
        </p>
        <p className="mt-2">
          Regardless if you need a mobile strategy, improving business agility
          with transformation services, or making recommendations for the
          emerging technologies best for gaining business outcomes.
        </p>
        <p className="mt-2">
          Our team will look for the most accurate resolution.
        </p>
      </>
    ),
  },
  {
    title: "Custom Software Development",
    icon: "💻",
    description: (
      <>
        <p>
          We started as a software house, so we quite well understand challenges
          coming from scaling business, and with implementing digital
          transformation solutions.
        </p>
        <p className="mt-2">
          This understanding, and well-rounded experience in software
          technologies helps us provide clients with custom-build results.
        </p>
      </>
    ),
  },
  {
    title: "React Native App Development",
    icon: "📱",
    description: (
      <>
        <p>
          We create fast, scalable, cross-platform, and native-like apps. We
          focus on integrated approach to increase efficiency.
        </p>
        <p className="mt-2">
          Our top priority is to deliver power and value with every in effort to
          support your business goals.
        </p>
      </>
    ),
  },
  {
    title: "SAP Commerce Expertise",
    icon: "🛒",
    description: (
      <>
        <p>
          SAP Commerce Cloud is a comprehensive solution that supports online
          businesses in delivering an exceptional buying experience.
        </p>
        <p className="mt-2">
          Imagine introducing a whole new, innovative technology to the business
          you co-create. The one that enables progress in areas like seamless
          customer experience, easier acquiring customer insights (for more
          fact-based decisions), brings increased efficiency and more.
        </p>
        <p className="mt-2">
          All you need is a technological partner who will support you on that.
          More on that specific matter you can read right here.
          !!!!!!!!!!!!!!!!!!!!![internal linking to SAP Commerce Cloud:
          Revolutionize Your Digital Commerce with a Unified Platform]
        </p>
      </>
    ),
  },
  {
    title: "Managed Team Solutions",
    icon: "👥",
    description: (
      <>
        <p>
          Every expanding organization meets the moment, when certain functions
          needs to be outsourced, so the processes maintain efficiency.
        </p>
        <p className="mt-2">
          And so employees could focus on their core business objectives.
        </p>
        <p className="mt-2">
          Whether you require handling infrastructure management, cybersecurity,
          or technical support, we will appear in your corner, ready to take
          over some of your tasks.
        </p>
      </>
    ),
  },
];

export const AreasOfExpertise = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div className="flex items-center gap-x-8 mt-20">
        <h2 className="text-h2 font-medium">Areas of Expertise</h2>
        {!!swiperRef && (
          <SliderNavigation
            swiperRef={swiperRef}
            currentSlide={currentSlide}
            items={slidesContent}
          />
        )}
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3.3}
        modules={[Mousewheel, Navigation]}
        onInit={setSwiperRef}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.1,
          releaseOnEdges: true,
        }}
        pagination={{ clickable: true }}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="p-4 mt-4 bg-white shadow-md rounded-lg"
          >
            <div>
              <span>{slide.icon}</span> <strong>{slide.title}:</strong>{" "}
              <p className="mt-2">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
