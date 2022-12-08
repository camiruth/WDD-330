export const getPokemonTeam = () => {
  return JSON.parse(localStorage.getItem("pokemonTeam")) || [];
};

export const setPokemonTeam = (pokemonTeam) => {
  localStorage.setItem("pokemonTeam", JSON.stringify(pokemonTeam));
};