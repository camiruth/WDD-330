import { getPokemonTeam, setPokemonTeam } from "./ls.js";

export default class Pokemon {
  constructor() {
    this.allPokemonNames = [];
  }

  showAllAvailablePokemon() {
    const availablePokemonDiv = document.getElementById('availablePokemon');
    console.log('this.allPokemonNames', this.allPokemonNames);
    for (let i = 0; i < this.allPokemonNames.length; i++) {
      var div = document.createElement('div');
      div.innerHTML = `
        <span>${this.allPokemonNames[i].name}</span>
      `;
      availablePokemonDiv.appendChild(div);
    }
  }

  async showAvailablePokemon() {
    try {
      const fetchAllPokemonNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
      const response = await fetchAllPokemonNames.json();
      this.allPokemonNames = response.results;
      this.allPokemonNames = this.allPokemonNames.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      this.showAllAvailablePokemon();
    } catch (err) {
      alert('There was an error getting pokemon names');
    }
  }

  showTeam() {
    // clear search input and results
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';

    const team = getPokemonTeam();
    console.log('showTeam team', team);
    var teamResultsDiv = document.getElementById('teamResults');
    teamResultsDiv.innerHTML = '';
    for (let i = 0; i < team.length; i++) {
      var div = document.createElement('div');
      div.classList.add('teamDiv');
      div.innerHTML = `
        <div class="leftTeamDiv">
          <img src=${team[i].sprites.front_default} />
        </div>
        <div class="rightTeamDiv">
          <div>
            <div class="PokemonTeamName">${team[i].name}</div>
            <div>Height: ${team[i].height}</div>
          </div>
        </div>
        <div>
          <button id="removeFromTeam-${i}" type="button">X</button>
        </div>
      `;

      teamResultsDiv.appendChild(div);

      const button = document.getElementById(`removeFromTeam-${i}`);
      button.onclick = () => {
        this.removeFromTeam(i);
      };
    }
  }

  async searchPokemon() {
    let searchInput = document.getElementById('searchInput').value;
    searchInput = searchInput.toLowerCase();// name must be lowercase
    try {
      const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      const response = await fetchPokemon.json();
      this.showSearchResults(response);
    } catch (err) {
      alert('Pokemon name not found, try again');
    }
  }

  addToTeam(newTeamMember) {
    const team = getPokemonTeam();
    team.push(newTeamMember);
    setPokemonTeam(team);
    this.showTeam();
  }

  removeFromTeam(index) {
    const team = getPokemonTeam();
    team.splice(index, 1);
    setPokemonTeam(team);
    this.showTeam();
  }

  showSearchResults(details) {

    const searchResults = document.getElementById('searchResults');
    searchResults.classList.add('teamDiv');
    searchResults.innerHTML = `
      <div>
        <img src=${details.sprites.front_default} />
      </div>
      <div>
        <div class="PokemonTeamName">${details.name}</div>
        <div>Height: ${details.height}</div>
      </div>
      <div>
        <button id="addToTeam" type="button">Add to Team</button>
      </div>
    `;
    const button = document.getElementById('addToTeam');
    button.onclick = () => {
      this.addToTeam(details);
    };
  }

}