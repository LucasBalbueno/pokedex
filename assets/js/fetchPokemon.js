import criarCard from "./cardsPokemon.js";

async function fetchPokemon(urlApi = 'https://pokeapi.co/api/v2/pokemon?') {
  await fetch(urlApi)
    .then(response => response.json())
    .then(async data => {
      const PokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      }));

      PokemonDetails.sort((a, b) => a.id - b.id).forEach((pokemon) => {
        criarCard(pokemon);
      });
    })
    .catch(error => console.error('Erro:', error));
}

async function fetchSpecie(id) {
  let descricao = ''
  if (typeof id == 'number') {
    descricao = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then((data) => {
        const descricaoPokemon = data.flavor_text_entries[2].flavor_text
        return descricaoPokemon
      })
      .catch(error => console.error('Erro:', error));
  } 
  return descricao
}

export { fetchPokemon, fetchSpecie };