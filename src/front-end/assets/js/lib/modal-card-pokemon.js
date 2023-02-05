const openCardPokemon = document.querySelectorAll('.js-open-details-pokemon')
const closeCardPokemon = document.querySelectorAll('.js-close-details-pokemon')

function openDetailsPokemon() {
  document.documentElement.classList.add('open-modal')
}

function closeDetailsPokemon() {
  document.documentElement.classList.remove('open-modal')
}

openCardPokemon.forEach(card => {
  card.addEventListener('click', openDetailsPokemon)
})

closeCardPokemon.forEach(card => {
  card.addEventListener('click', closeDetailsPokemon)
})