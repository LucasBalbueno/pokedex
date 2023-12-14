import { fetchPokemon, fetchSpecie } from "./fetchPokemon.js";


const pokemonList = document.getElementById('pokemonList');
    const criarCard = async (pokemon) => {

    // PEGANDO AS INFORMAÇÕES
    const id = pokemon.id;
    const type = pokemon.types[0].type.name
    const descricao = await fetchSpecie(id)
    


    // CRIANDO DIV CARD
    const card = document.createElement('div');
    card.style="width: 18rem;";
    card.classList.add('card');


   // CRIANDO IMAGEM POKEMON
    const divImg = document.createElement('div');
    divImg.classList.add('divImg');
    const pokemonImg = document.createElement('img');
    if (id > 706) {
        pokemonImg.src = pokemon.sprites.front_shiny;
        pokemonImg.classList.add('pokemonImgPadrao');
    } else {
        pokemonImg.src = `https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${id}.gif?raw=true`;
        pokemonImg.classList.add('pokemonImg');
    }


    // CRIANDO DIV CONTÉUDO
    const conteudo = document.createElement('div');
    conteudo.classList.add('card-body');


    // CRIANDO DIV TÍTULO E ID
    const tituloId = document.createElement('div');
    tituloId.classList.add('tituloID');


    // CRIANDO TÍTULO
    const titulo = document.createElement('h1');
    titulo.classList.add("card-title");
    titulo.textContent = pokemon.name;


    // CRIANDO ID
    const numId = document.createElement('h2');
    numId.classList.add('numId');
    numId.textContent = `Nº: ${id}`;


    // CRIANDO TEXTO
    const texto = document.createElement('p');
    texto.classList.add('card-text');
    texto.textContent = `Tipo: ${type}`

    const textoDescriçao = document.createElement('p');
    textoDescriçao.classList.add('card-text');
    textoDescriçao.textContent = descricao;


    // ESTRUTURANDO ELEMENTOS HTML
    pokemonList.appendChild(card);
    card.appendChild(divImg);
    divImg.appendChild(pokemonImg);
    card.appendChild(conteudo);
    conteudo.appendChild(tituloId);
    tituloId.appendChild(titulo);
    tituloId.appendChild(numId);
    conteudo.appendChild(texto);
    conteudo.appendChild(textoDescriçao);

    
    
}

export default criarCard;