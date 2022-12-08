import Pokemon from './pokemon.js';

const pokemon = new Pokemon();

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", () => {
  pokemon.searchPokemon();
});

window.addEventListener("load", async() => {
  pokemon.showAvailablePokemon();
  pokemon.showTeam();
});