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
      });
    })
    .catch(error => console.error('Erro:', error));
}

async function fetchSpecie(id) {
  if (typeof id == 'number') {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then((data) => {
        const descricaoPokemon = data.flavor_text_entries[1].flavor_text

        // LEVAR ESSA INFORMAÇÃO PARA A FUNÇÃO CRIAR CARD
      })
      .catch(error => console.error('Erro:', error));
  } 

}

export { fetchPokemon, fetchSpecie };


// LEVAR INFORMAÇÃO DESCRIÇÃO PARA A FUNÇÃO CRIAR CARDS