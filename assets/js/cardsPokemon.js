import pokemon from "./fetchPokemon.js";

// Obtém o elemento onde os nomes dos Pokémon serão inseridos
const pokemonList = document.getElementById('pokemonList');


    const criarCard = (pokemon) => {
    
    const id = pokemon.id

    const card = document.createElement('div');
    card.style="width: 18rem;"
    card.classList.add('card');

    const conteudo = document.createElement('div')
    conteudo.classList.add('card-body')

    const img = document.createElement('img')
    img.src = `https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${id}.gif?raw=true`

    // // Cria um novo elemento de parágrafo
    const titulo = document.createElement('h5');
    titulo.classList.add("card-title");

    const texto = document.createElement('p')
    texto.classList.add('card-text')

    // // Define o texto do parágrafo para o nome do Pokémon
    titulo.textContent = pokemon.name;
    texto.textContent = id

    card.appendChild(conteudo);
    conteudo.appendChild(titulo);
    conteudo.appendChild(texto);
    conteudo.appendChild(img);
    pokemonList.appendChild(card);
}

export default criarCard;
