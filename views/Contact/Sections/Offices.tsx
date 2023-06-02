import { offices, Office } from "@/views/Contact/offices";
import Image from "next/image";

interface OfficeProps {
  office: Office;
}
const Office = ({ office }: OfficeProps) => {
  return (
    <li className="w-full flex flex-col">
      <div className="w-full h-[300px] rounded-2xl overflow-hidden">
        {!!office.mapUrl && (
          <Image src={office.mapUrl} width={536} height={300} alt="map with marked location of office" />
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">{office.label}</h2>
        <p className="mt-3 font-normal">{office.street}</p>
        <p className="font-normal">
          {office.postalCode} {office.city}, {office.country}
        </p>
      </div>
    </li>
  );
};

export const Offices = () => {
  return (
    <section className="flex justify-center bg-palette-grey-200 w-full">
      <div className="flex flex-col layout mt-14 md:mt-0">
        <h2 className="text-h2">Our offices</h2>

        <ul className="flex flex-col md:flex-row items-center gap-y-12 md:gap-x-7 justify-center w-full mt-10">
          {offices.map((office, index) => (
            <Office key={index} office={office} />
          ))}
        </ul>
      </div>
    </section>
  );
};
