import criarCard from "./cardsPokemon.js";

async function fetchPokemon(urlApi = 'https://pokeapi.co/api/v2/pokemon?') {
  try{
    const response = await fetch(urlApi)
    const data = await response.json()
    const pokemons = data.results
  
    for (const pokemon of pokemons) {
      const pokemonData = await fetchPokemonDetails(pokemon.url)
      await criarCard(pokemonData);
    }
  } catch (error ){
    console.log('erro na função fetchPokemon', erro)
  }
}

async function fetchPokemonDetails (url) {
  const response = await fetch(url)
  const pokemon = await response.json()
  return pokemon
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