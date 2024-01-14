interface IImage {
  path: string;
  position: "center" | "top";
  alt: string;
  hasPriority: boolean;
}

export const images: IImage[] = [
  { path: "24.webp", position: "center", alt: "", hasPriority: true },
  { path: "23.webp", position: "center", alt: "", hasPriority: true },
  { path: "22.webp", position: "center", alt: "", hasPriority: true },
  { path: "21.webp", position: "center", alt: "", hasPriority: true },
  { path: "20.webp", position: "center", alt: "", hasPriority: true },
  {
    path: "13.webp",
    position: "center",
    alt: "Mike and Jakub on IBC2023",
    hasPriority: false,
  },
  {
    path: "14.webp",
    position: "center",
    alt: "Jakub on IBC2023",
    hasPriority: false,
  },
  {
    hasPriority: false,
    path: "15.webp",
    position: "center",
    alt: "IBC2023 and badges",
  },
  { hasPriority: false, path: "16.webp", position: "center", alt: "" },
  {
    hasPriority: false,
    path: "17.webp",
    position: "center",
    alt: "Mike and Jakub",
  },
  { hasPriority: false, path: "18.webp", position: "center", alt: "" },
  { hasPriority: false, path: "19.webp", position: "center", alt: "" },
  {
    hasPriority: false,
    path: "2.webp",
    position: "center",
    alt: "photo with couple pizzas",
  },
  {
    hasPriority: false,
    path: "1.webp",
    position: "center",
    alt: "photo of our team",
  },
  {
    hasPriority: false,
    path: "3.webp",
    position: "top",
    alt: "photo of Jakub and Gabi talking",
  },
  {
    hasPriority: false,
    path: "4.webp",
    position: "center",
    alt: "photo from conference event",
  },
  {
    hasPriority: false,
    path: "5.webp",
    position: "center",
    alt: "chillout with two beers after work",
  },
  {
    hasPriority: false,
    path: "6.webp",
    position: "center",
    alt: "badge on a conference",
  },
  {
    hasPriority: false,
    path: "7.webp",
    position: "center",
    alt: "view from plane",
  },
  {
    hasPriority: false,
    path: "8.webp",
    position: "center",
    alt: "Jakub Szudejko - COO",
  },
  {
    hasPriority: false,
    path: "9.webp",
    position: "center",
    alt: "image from Las Vegas Convention Center",
  },
  {
    hasPriority: false,
    path: "10.webp",
    position: "center",
    alt: "Mike and Jakub in Dubrovnik",
  },
  {
    hasPriority: false,
    path: "11.webp",
    position: "center",
    alt: "Jakub Szudejko - on a meeting",
  },
  {
    hasPriority: false,
    path: "olivia.webp",
    position: "center",
    alt: "Olivia Business Center",
  },
];
