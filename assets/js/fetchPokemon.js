import criarCard from "./cardsPokemon.js";

async function fetchPokemon(urlApi = 'https://pokeapi.co/api/v2/pokemon?') {
  await fetch(urlApi)
    .then(response => response.json())
    .then(async data => {
      const PokemonDetails = await Promise.all(data.results.map(async (pokemon) => { 
        const response = await fetch(pokemon.url);
        return response.json();
      }));
    
      PokemonDetails.forEach((pokemon) => {
        criarCard(pokemon);
        console.log(pokemon.sprites.front_shiny)
      });
    })
    .catch(error => console.error('Erro:', error));
}

export default fetchPokemon;


// LINK DAS DESCRIÇÕES https://pokeapi.co/api/v2/pokemon-species/1

// DESCRIÇÃO POKEMONS = data.flavor_text_entries[0].flavor_text