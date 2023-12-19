import { fetchAndCreatePokemon } from "./fetchPokemon.js"; 

const input = document.querySelector('#search-input');
const form = document.querySelector('#searchForm');
const pokemonList = document.getElementById('pokemonList');


form.addEventListener('submit', async(event) => {
    event.preventDefault();
    pokemonList.textContent = ''
    try {
      const validations = input.value.toLowerCase().trim().replace((/\s/g), '')
      await fetchAndCreatePokemon(validations);
    } catch (erro) {
      console.log('nao')

      const textoErro = document.createElement('p');
      textoErro.textContent = 'Pokemon não encontrado!';
      textoErro.classList.add('textoErroBusca')

      pokemonList.appendChild(textoErro);
    }
  });