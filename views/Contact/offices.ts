export interface Office {
  label: string;
  street: string;
  postalCode: string;
  image: string;
  city: string;
  country: string;
}

export const offices: Office[] = [
  {
    label: "Main office in Gdańsk",
    city: "Gdańsk",
    street: "al. Grunwaldzka 472B, Office O4.",
    image: "/main-office.webp",
    postalCode: "80-309",
    country: "Poland",
  },
  {
    label: "Office in Warsaw",
    city: "Warsaw",
    country: "Poland",
    image: '/warsaw-office.png',
    postalCode: "00-025",
    street: "ul. Krucza 50",
  },
];
