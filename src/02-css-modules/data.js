const BASE_URL = import.meta.env.BASE_URL;

export const products = [
  {
    id: 1,
    title: "Dark Souls: Prepare to Die Edition",
    price: 199.99,
    rating: 5,
    tag: "Clássico",
    image: `${BASE_URL}assets/Dark_Souls_1_capa.webp`,
  },
  {
    id: 2,
    title: "Dark Souls II: Scholar of the First Sin",
    price: 179.99,
    rating: 4,
    tag: "Promo",
    image: `${BASE_URL}assets/Dark_Souls_2_capa.webp`,
  },
  {
    id: 3,
    title: "Dark Souls III: The Fire Fades Edition",
    price: 219.99,
    rating: 5,
    tag: "Novo",
    image: `${BASE_URL}assets/Dark_Souls_3_capa.webp`,
  },
  {
    id: 4,
    title: "Demon Souls Remake",
    price: 189.99,
    rating: 5,
    tag: "Remake",
    image: `${BASE_URL}assets/Demons_Souls_remake_cover_art.webp`,
  },
  {
    id: 5,
    title: "Elden Ring",
    price: 499.99,
    rating: 5,
    tag: "Coleção",
    image: `${BASE_URL}assets/Elden_Ring_capa.webp`,
  },
  {
    id: 6,
    title: "Sekiro shadows die twice",
    price: 159.99,
    rating: 4,
    tag: "Promoção",
    image: `${BASE_URL}assets/Sekiro_art.webp`,
  },
];
