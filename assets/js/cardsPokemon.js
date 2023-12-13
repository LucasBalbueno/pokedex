import pokemon from "./fetchPokemon.js";

// Obtém o elemento onde os nomes dos Pokémon serão inseridos
const pokemonList = document.getElementById('pokemonList');
    const criarCard = (pokemon) => {
    // PEGANDO AS INFORMAÇÕES
    const id = pokemon.id
    // const PadraoImg = pokemon.sprites.front_shiny


    // CRIANDO DIV CARD
    const card = document.createElement('div');
    card.style="width: 18rem;"
    card.classList.add('card');

   // CRIANDO IMAGEM POKEMON
    const divImg = document.createElement('div')
    divImg.classList.add('divImg')
    const pokemonImg = document.createElement('img')
    if (id > 706) {
        pokemonImg.src = pokemon.sprites.front_shiny
        pokemonImg.classList.add('pokemonImgPadrao')
    } else {
        pokemonImg.src = `https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${id}.gif?raw=true`
        pokemonImg.classList.add('pokemonImg')
    }


    // CRIANDO DIV CONTÉUDO
    const conteudo = document.createElement('div')
    conteudo.classList.add('card-body')


    // CRIANDO TÍTULO
    const titulo = document.createElement('h5');
    titulo.classList.add("card-title");
    titulo.textContent = pokemon.name;


    // CRIANDO TEXTO
    const texto = document.createElement('p')
    texto.classList.add('card-text')
    texto.textContent = id


    // ESTRUTURANDO ELEMENTOS HTML
    pokemonList.appendChild(card);
    card.appendChild(divImg)
    divImg.appendChild(pokemonImg);
    card.appendChild(conteudo);
    conteudo.appendChild(titulo);
    conteudo.appendChild(texto);
}

export default criarCard;
