import pokemon from "./fetchPokemon.js";

// Obtém o elemento onde os nomes dos Pokémon serão inseridos
const pokemonList = document.getElementById('pokemonList');

const criarCard = (pokemon, abilities) => {
    const card = document.createElement('div');
    card.style="width: 18rem;"
    card.classList.add('card');

    const img = document.createElement('img')
    img.src = 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/20/pokemon-mestre-anime-qxtbzrqh66us.jpg'


    const conteudo = document.createElement('div')
    conteudo.classList.add('card-body')

    // // Cria um novo elemento de parágrafo
    const titulo = document.createElement('h5');
    titulo.classList.add("card-title");

    const texto = document.createElement('p')
    texto.classList.add('card-text')

    // // Define o texto do parágrafo para o nome do Pokémon
    titulo.textContent = pokemon.name;
    texto.textContent = abilities.id

    card.appendChild(img);
    card.appendChild(conteudo);
    conteudo.appendChild(titulo);
    conteudo.appendChild(texto);
    pokemonList.appendChild(card);
}

export default criarCard;