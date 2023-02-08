
//Definindo a url da API
listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');

function listingPokemons(urlApi) {
  axios({
    method: 'GET',
    url: urlApi,
  })
  .then((response) => {

    const countPokemons = document.getElementById('js-count-pokemons');

    //Desestruturando os dados do data
    const { results, next, count } = response.data;

    //Pegando somente o count do data para exibir no #js-count-pokemon
    countPokemons.innerText = count;

    //Percorrendo o results para filtrar somente as url's dos pokemons
    results.forEach(pokemon => {
      let urlApiDetails = pokemon.url;
      
      //Acessando a url especifica de cada pokemon e trazendo o que esta url contém de dados
      axios({
        method: 'GET',
        url: `${urlApiDetails}`,
      })
      .then(response => {

        //Desestruturando os dados do data
        const { name, id, sprites, types } = response.data

        //Instâncionando em um objeto
        const infoCard = {
          name: name,
          code: id,
          image: sprites.other.dream_world.front_default
        }

        console.log(infoCard.image)
      })
    })
  })
}