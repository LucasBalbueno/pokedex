import { fetchAndCreatePokemon } from "./fetchPokemon.js"; 

const input = document.querySelector('#search-input');
const form = document.querySelector('#searchForm');


form.addEventListener('submit', async(event) => {
    event.preventDefault();
    await fetchAndCreatePokemon(input.value.toLowerCase());
    
  });