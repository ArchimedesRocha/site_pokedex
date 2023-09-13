const btnLoadMore = document.getElementById('js-btn-load-more');

let countPagination = 10;

function showMorePokemons() {
  listingPokemons(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${countPagination}`);

  countPagination = countPagination + 9;
}

btnLoadMore.addEventListener('click', showMorePokemons);

