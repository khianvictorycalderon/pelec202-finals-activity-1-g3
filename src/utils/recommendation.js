const FIXED_RANDOM_PRESETS = [
  "Inception",
  "Titanic",
  "The Matrix",
  "Avengers",
  "Interstellar",
  "Joker",
  "Frozen",
  "Gladiator",
  "Harry Potter",
  "Spider-Man",
  "Jurassic Park",
  "The Dark Knight",
  "Avatar",
  "Deadpool",
  "The Lion King",
  "Fast and Furious",
  "Doctor Strange",
  "Black Panther",
  "The Conjuring",
  "John Wick",
  "Mission Impossible",
  "Shrek",
  "Twilight",
  "Hunger Games"
];

export const getRandomSearch = () => {
  const randomIndex = Math.floor(Math.random() * FIXED_RANDOM_PRESETS.length);
  return FIXED_RANDOM_PRESETS[randomIndex];
};