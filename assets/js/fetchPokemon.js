import criarCard from "./cardsPokemon.js";

async function fetchPokemon(urlApi = 'https://pokeapi.co/api/v2/pokemon?') {
  await fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(async pokemon => {
        const pokemonData = await fetch(pokemon.url).then(response => response.json());
        criarCard(pokemon, pokemonData);
      });
    })
    .catch(error => console.error('Erro:', error));
}

export default fetchPokemon;


// LINK DAS DESCRIÇÕES https://pokeapi.co/api/v2/pokemon-species/1

// DESCRIÇÃO POKEMONS = data.flavor_text_entries[0].flavor_text