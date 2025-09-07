// data.js
const BASE_URL = import.meta.env.BASE_URL;

export const products = [
  {
    id: 1,
    title: "Final Fantasy VII Rebirth",
    price: 349.99,
    rating: 5,
    tag: "Novo",
    img: `${BASE_URL}assets/Final_Fantasy_7_Rebirth_capa.webp`,
  },
  {
    id: 2,
    title: "Final Fantasy XVI",
    price: 299.99,
    rating: 5,
    tag: "Novo",
    img: `${BASE_URL}assets/Final_Fantasy_16_capa.webp`,
  },
  {
    id: 3,
    title: "Final Fantasy XV",
    price: 199.99,
    rating: 4,
    tag: "Promo",
    img: `${BASE_URL}assets/Final_Fantasy_XV_capa.webp`,
  },
  {
    id: 4,
    title: "Final Fantasy X/X-2 HD Remaster",
    price: 159.99,
    rating: 5,
    tag: "Remaster",
    img: `${BASE_URL}assets/FFX-X-2_HD_Remaster_NA_Cover.webp`,
  },
  {
    id: 5,
    title: "Final Fantasy XIII",
    price: 149.99,
    rating: 4,
    tag: "Clássico",
    img: `${BASE_URL}assets/Final_Fantasy_XIII_EU_box_art.webp`,
  },
  {
    id: 6,
    title: "Final Fantasy XII: The Zodiac Age",
    price: 139.99,
    rating: 5,
    tag: "Remaster",
    img: `${BASE_URL}assets/Final_Fantasy_XII_Box_Art.webp`,
  },
];
