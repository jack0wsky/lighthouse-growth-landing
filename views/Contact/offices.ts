export interface Office {
  label: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export const offices: Office[] = [
  {
    label: "Main office in Gdańsk",
    city: "Gdańsk",
    street: "al. Grunwaldzka 472B, Office O4.",
    postalCode: "80-309",
    country: "Poland",
  },
  {
    label: "Office in Warsaw",
    city: "Warsaw",
    country: "Poland",
    postalCode: "00-025",
    street: "ul. Krucza 50",
  },
];
