import type Movie from "./movie";

export const movies = <Movie[]>[
  {
    id: 1,
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg",
    year: 2024,
    title: "Stranger Things",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est incidunt ipsam molestias iure aut, soluta maxime facere quaerat molestiae.',
    score: 86.0,
    keywords: ["Action", "Adventure", "Horror"],
  },

  {
    id: 2,
    image_url:
      "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
    year: 2024,
    title: "Kung Fu Panda 4",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est incidunt ipsam molestias iure aut, soluta maxime facere quaerat molestiae.',
    score: 68.0,
    keywords: [
      "Martial Arts",
      "kung fu",
      "panda"
    ],
  },
];
