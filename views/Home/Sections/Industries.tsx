import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/views/routes";

export const Industries = () => {
  return (
    <section className="layout pt-24 pb-14">
      <h2 className="text-h2">Industries</h2>

      <ul className="w-full flex items-center gap-x-8 mt-12">
        <li className="h-[370px] flex flex-col justify-between w-full bg-palette-grey-200 rounded-xl pt-4">
          <Link href={Routes.Streaming}>
            <div className="h-max flex justify-center items-center">
              <Image
                src="/streaming.png"
                height={200}
                width={189}
                alt="streaming & telecoms illustration"
              />
            </div>
            <div className="flex flex-col justify-between p-5">
              <h3 className="text-1.75 font-medium">Streaming & Telecoms</h3>
              <p>See projects</p>
            </div>
          </Link>
        </li>

        <li className="h-[370px] w-full bg-palette-grey-200 rounded-xl pt-4">
          <div className="h-4/6 flex justify-center items-center">
            <Image
              src="/ecommerce.png"
              width={255}
              height={183}
              alt="e-commerce illustration"
            />
          </div>
          <div className="flex flex-col justify-between p-5 h-2/6">
            <h3 className="text-1.75 font-medium">eCommerce</h3>
            <Link href={Routes.Ecommerce}>See projects</Link>
          </div>
        </li>

        <li className="h-[370px] w-full bg-palette-grey-200 rounded-xl pt-4">
          <div className="h-4/6 flex justify-center items-center">
            <Image
              src="/logistics.png"
              width={254}
              height={142}
              alt="e-commerce illustration"
            />
          </div>
          <div className="flex flex-col justify-between p-5 h-2/6">
            <h3 className="text-1.75 font-medium">Logistics</h3>
            <Link href={Routes.Logistics}>See projects</Link>
          </div>
        </li>

        <li className="h-[370px] w-full bg-palette-grey-200 rounded-xl pt-4">
          <div className="h-4/6 flex justify-center items-center">
            <Image
              src="/sap.png"
              width={235}
              height={134}
              alt="e-commerce illustration"
            />
          </div>
          <div className="flex flex-col justify-between p-5 h-2/6">
            <h3 className="text-1.75 font-medium">ERP / SAP</h3>
            <Link href={Routes.Sap}>See projects</Link>
          </div>
        </li>
      </ul>
    </section>
  );
};
