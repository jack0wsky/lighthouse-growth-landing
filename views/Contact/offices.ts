export interface Office {
  label: string;
  street: string;
  postalCode: string;
  mapUrl: string;
  city: string;
  country: string;
}

export const offices: Office[] = [
  {
    label: "Main office in Gdańsk",
    city: "Gdańsk",
    street: "al. Grunwaldzka 472B, Office O4.",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(18.5717,54.4034)/18.5717,54.4034,15,0/536x300?before_layer=admin-0-boundary&access_token=pk.eyJ1IjoiamFjazB3c2t5IiwiYSI6ImNqeTBpMjZnODAwYmczaW9pbzJzcmw1ZmIifQ.Cm3FLzzV89Dh6elS6STIag",
    postalCode: "80-309",
    country: "Poland",
  },
  {
    label: "Office in Warsaw",
    city: "Warsaw",
    country: "Poland",
    mapUrl:
      "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+555555(21.0168,52.2315)/21.0168,52.2315,15,0/536x300?before_layer=admin-0-boundary&access_token=pk.eyJ1IjoiamFjazB3c2t5IiwiYSI6ImNqeTBpMjZnODAwYmczaW9pbzJzcmw1ZmIifQ.Cm3FLzzV89Dh6elS6STIag",
    postalCode: "00-025",
    street: "ul. Krucza 50",
  },
];
