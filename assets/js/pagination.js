import { fetchPokemon, fetchSpecie } from "./fetchPokemon.js";

// PAGINATION
const pokemonList = document.getElementById('pokemonList');
const previousPage = document.getElementById('previousPage');
const nextPage = document.getElementById('nextPage');

const url = 'https://pokeapi.co/api/v2/pokemon?';
let contador = 0

nextPage.addEventListener('click', () => {
    pokemonList.textContent = ''
    contador += 20;
    const novaUrl = url + 'offset=' + contador;
    fetchPokemon(novaUrl)
})

previousPage.addEventListener('click', () => {
    if (contador - 20 >= 0) {
        pokemonList.textContent = ''
        contador -= 20;
        const novaUrl = url + 'offset=' + contador;
        fetchPokemon(novaUrl)
    } else { }
})