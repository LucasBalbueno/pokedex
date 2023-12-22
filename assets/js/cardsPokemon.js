import { fetchPokemon, fetchSpecie } from "./fetchPokemon.js";

const pokemonList = document.getElementById('pokemonList');

const criarCard = async (pokemon) => {

    const id = pokemon.id;
    const type = pokemon.types[0].type.name
    const descricao = await fetchSpecie(id)

    const card = document.createElement('div');
    card.style = "width: 18rem;";
    card.classList.add('card');

    const divImg = document.createElement('div');
    divImg.classList.add('divImg');
    const pokemonImg = document.createElement('img');
    const pokeImagemApi = pokemon.sprites.front_default ||  '../assets/imgs/Pokebola.png';
    if (id > 706) {
        pokemonImg.src = pokeImagemApi;
        pokemonImg.classList.add('pokemonImgPadrao');
    } else {
        pokemonImg.src = `https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${id}.gif?raw=true`;
        pokemonImg.classList.add('pokemonImg');
    }
    
    const conteudo = document.createElement('div');
    conteudo.classList.add('card-body');

    const tituloId = document.createElement('div');
    tituloId.classList.add('tituloID');

    const titulo = document.createElement('h1');
    titulo.classList.add("card-title");
    titulo.textContent = pokemon.name;

    const numId = document.createElement('h2');
    numId.classList.add('numId');
    numId.textContent = `Nº: ${id}`;

    const texto = document.createElement('p');
    texto.classList.add('card-text');
    texto.textContent = `Tipo: ${type}`

    const textoDescriçao = document.createElement('p');
    textoDescriçao.classList.add('card-text');
    textoDescriçao.textContent = descricao;

    const buttonPokedex = document.createElement('p');
    buttonPokedex.classList.add('btn');
    buttonPokedex.classList.add('btn-danger');
    buttonPokedex.setAttribute('data-bs-toggle', 'modal');
    buttonPokedex.setAttribute('data-bs-target', `#pokemonModal-${id}`);
    buttonPokedex.textContent = "Mais informações"

    pokemonList.appendChild(card);
    card.appendChild(divImg);
    divImg.appendChild(pokemonImg);
    card.appendChild(conteudo);
    conteudo.appendChild(tituloId);
    tituloId.appendChild(titulo);
    tituloId.appendChild(numId);
    conteudo.appendChild(texto);
    conteudo.appendChild(textoDescriçao);
    conteudo.appendChild(buttonPokedex);

    
    const modalPopup = document.getElementById('modalPopup')
    
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal', 'fade');
    modalDiv.setAttribute('id', `pokemonModal-${id}`);
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('aria-labelledby', 'pokemonModalLabel');
    modalDiv.setAttribute('aria-hidden', 'true');
    
    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.classList.add('modal-dialog');
    
    const imgElement = document.createElement('div');
    imgElement.classList.add('ImgFundoPokedex');

    const modalImg = document.createElement('img');
    const modalImagemApi = pokemon.sprites.front_default ||  '../assets/imgs/Pokebola.png';
    if (id > 706) {
        modalImg.src = modalImagemApi;
        modalImg.classList.add('modalImgPadrao');
    } else {
        modalImg.src = `https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${id}.gif?raw=true`;
        modalImg.classList.add('modalImg');
    }
    
    const divConteudo = document.createElement('div');
    divConteudo.classList.add('divConteudo');

    const nome = document.createElement('p');
    nome.classList.add('modalNome');
    nome.textContent = `Nº${id} - ${pokemon.name}`;

    const infos = document.createElement('div');
    infos.classList.add('modalInfos');

    const info1 = document.createElement('p');
    info1.classList.add('modalInfoTexto');
    info1.textContent = `Tipo: ${type}`

    const info2 = document.createElement('p');
    info2.classList.add('modalInfoTexto');
    info2.textContent = `Experiência: ${pokemon.base_experience}`

    const info3 = document.createElement('p');
    info3.classList.add('modalInfoTexto');
    info3.textContent = `Altura: ${pokemon.height}dm`;

    const info4 = document.createElement('p');
    info4.classList.add('modalInfoTexto');
    info4.textContent = `Peso: ${pokemon.weight}hg`

    const info5 = document.createElement('p');
    info5.classList.add('modalInfoTexto');
    info5.textContent = `Movimentos : ${pokemon.moves[0].move.name}, ${pokemon.moves[1].move.name}, ${pokemon.moves[2].move.name}`
    
    infos.appendChild(info1);
    infos.appendChild(info2);
    infos.appendChild(info3);
    infos.appendChild(info4);
    infos.appendChild(info5);
    
    divConteudo.appendChild(infos)
    divConteudo.appendChild(nome)
    imgElement.appendChild(divConteudo)
    imgElement.appendChild(modalImg)
    modalDialogDiv.appendChild(imgElement);
    modalDiv.appendChild(modalDialogDiv);
    modalPopup.appendChild(modalDiv)
}

const criarModal = (pokemon) => {
}

export {criarCard, criarModal};