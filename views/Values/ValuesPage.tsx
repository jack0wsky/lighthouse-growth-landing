"use client";

import { BurgerMenu } from "@/shared/BurgerMenu";
import { ContactUs } from "@/views/Home/Sections";

export const ValuesPage = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center mt-40">
        <section className="layout w-full flex flex-col">
          <h1 className="text-h1">What drives us?</h1>
          <p className="w-3/4 mt-8">
            With over 20 years of industry experience, we have a deep
            understanding of the challenges that technology professionals face.
            Our journey has taken us through various roles and organizations,
            providing us with valuable insights into the inner workings of the
            corporate world. This extensive experience has driven us to forge a
            different path, one that prioritizes independence, creativity, and
            client satisfaction.
          </p>

          <div className="w-full flex flex-wrap mt-16 gap-12 mb-32">
            <p className="w-full md:w-2/5">
              As a family company with a tight-knit team of 20 talented
              professionals, we pride ourselves on delivering exceptional
              software solutions. We are passionate about crafting innovative
              and reliable IT solutions that meet the unique needs of our
              clients.
            </p>

            <p className="w-full md:w-2/5">
              At our core, we embrace the spirit of adventure and exploration,
              drawing inspiration from our love for sailing and hiking. This
              passion fuels our drive to continuously push boundaries and find
              creative solutions to complex challenges.
            </p>

            <p className="w-full md:w-2/5">
              Our company values are rooted in integrity, collaboration, and
              customer satisfaction. We believe in building long-term
              relationships with our clients by understanding their goals and
              providing them with tailored solutions that exceed their
              expectations.
            </p>

            <p className="w-full md:w-2/5">
              With a customer-centric approach, we strive for excellence in
              everything we do. Our team of experts combines technical expertise
              with a keen eye for detail, ensuring that every project is
              delivered with precision and quality.
            </p>

            <p className="w-full md:w-2/5">
              We foster a supportive and inclusive work environment that
              encourages personal growth and continuous learning. By nurturing a
              culture of teamwork and open communication, we leverage the
              diverse strengths of our team members to deliver outstanding
              results.
            </p>

            <p className="w-full md:w-2/5">
              Whether you are seeking custom software development, mobile app
              solutions, or web development services, we are here to guide you
              on your digital journey. Join us as we navigate the vast
              possibilities of technology, crafting software solutions that
              empower businesses to thrive in the digital era.
            </p>
          </div>
        </section>

        <ContactUs />
      </main>

      <BurgerMenu />
    </>
  );
};
