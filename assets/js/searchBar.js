import { fetchAndCreatePokemon } from "./fetchPokemon.js"; 

const input = document.querySelector('#search-input');
const form = document.querySelector('#searchForm');
const pokemonList = document.getElementById('pokemonList');


form.addEventListener('submit', async(event) => {
    event.preventDefault();
    pokemonList.textContent = ''
    await fetchAndCreatePokemon(input.value.toLowerCase());
  });