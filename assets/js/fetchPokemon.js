import criarCard from "./cardsPokemon.js";

async function fetchPokemon(urlApi = 'https://pokeapi.co/api/v2/pokemon?') {
  try{
    const response = await fetch(urlApi)
    const data = await response.json()
    const pokemons = data.results
  
    for (const pokemon of pokemons) {
      const parts = pokemon.url.split("/");
      const id = parts[parts.length - 2];
      await fetchAndCreatePokemon(id);
    }
  } catch (error ){
    console.log('erro na função fetchPokemon', error)
  }
}

async function fetchPokemonDetails (pokemonIdentifier) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`);
  const pokemon = await response.json();
  return pokemon;
  
}

async function fetchAndCreatePokemon(pokemonIdentifier) {
  const pokemonData = await fetchPokemonDetails(pokemonIdentifier)
  return await criarCard(pokemonData);
}

async function fetchSpecie(id) {
  let descricao = ''
  if (typeof id == 'number') {
    descricao = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then((data) => {
        const descricaoPokemon = data.flavor_text_entries[2].flavor_text.replaceAll('\f', ' ')
        return descricaoPokemon
      })
      .catch(error => console.error('Erro:', error));
  } 
  return descricao
}

export { fetchPokemon, fetchSpecie, fetchAndCreatePokemon };
