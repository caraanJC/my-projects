const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: 'd5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: 'f5f5f5',
  fighting: '#e6e0d4',
  normal: 'f5f5f5',
}

const createPokemonCard = ({ id, forms, types, sprites }) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const new_id = id.toString().padStart(3, '0')
  const name = forms[0].name[0].toUpperCase() + forms[0].name.slice(1)
  const pokeType = types[0].type.name

  pokemonEl.style.background = colors[pokeType]
  pokemonEl.innerHTML = `
    <div class="img-container">
        <img src=${sprites.front_default} alt="bulbasaur"/>
    </div>
    <div class="info">
    <span class="number">#${new_id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${pokeType}</span></small>
    </div>
  `

  poke_container.appendChild(pokemonEl)
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

fetchPokemons()
