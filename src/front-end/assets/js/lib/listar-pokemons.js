function firstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//--------------------------------------------------
//DEFININDO URL DA API
//--------------------------------------------------
listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');

//--------------------------------------------------
//CONSUMINDO DADOS DA API E INSTÂNCIANDO OBJETOS
//--------------------------------------------------
function listingPokemons(urlApi) {
  axios({
    method: 'GET',
    url: urlApi,
  })
  .then((response) => {

    const countPokemons = document.getElementById('js-count-pokemons');

    //--------------------------------------------------
    //Desestruturando os dados do data
    //--------------------------------------------------
    const { results, next, count } = response.data;

    //--------------------------------------------------
    //Pegando somente o count do data para exibir no #js-count-pokemon
    //--------------------------------------------------
    countPokemons.innerText = count;

    //--------------------------------------------------
    //Percorrendo o results para filtrar somente as url's dos pokemons
    //--------------------------------------------------
    results.forEach(pokemon => {
      let urlApiDetails = pokemon.url;
      
      //--------------------------------------------------
      //Acessando a url especifica de cada pokemon e trazendo o que esta url contém de dados
      //--------------------------------------------------
      axios({
        method: 'GET',
        url: `${urlApiDetails}`,
      })
      .then(response => {

        //--------------------------------------------------
        //Desestruturando os dados do data
        //--------------------------------------------------
        const { name, id, sprites, types } = response.data

        //--------------------------------------------------
        //Instâncionando em um objeto apenas as informações necessárias
        //--------------------------------------------------
        const infoCard = {
          name: name,
          code: id,
          image: sprites.other.dream_world.front_default,
          type: types[0].type.name         
        }

        //--------------------------------------------------
        // A ordem importa na hora de declarar a função lá em cima
        //--------------------------------------------------
        createCardPokemon(infoCard.code, infoCard.name, infoCard.image, infoCard.type)
      })
    })
  })
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------
// CRIANDO O CARD COMPLETO COM INFORMAÇÕES DOS POKEMONS
//--------------------------------------------------
const areaPokemons = document.getElementById('js-list-pokemon')

function createCardPokemon(code, name, image, type) {

  //--------------------------------------------------
  // CRIANDO A ESTRUTURA DO CARD
  //--------------------------------------------------
  let card = document.createElement('button');
  card.classList = `card js-open-details-pokemon ${type}`
  areaPokemons.appendChild(card);

  //--------------------------------------------------
  // CRIANDO ESTRUTURA DA IMAGEM DO POKEMON E BACKGROUND
  //--------------------------------------------------
  let divPokemonImage = document.createElement('div');
  divPokemonImage.classList = `pokemon-img`
  card.appendChild(divPokemonImage);
  
  let imgBg = document.createElement('img');
  imgBg.setAttribute('src', image)
  imgBg.classList = `${type}`
  divPokemonImage.appendChild(imgBg);

  //--------------------------------------------------
  // CRIANDO O CARD DO POKEMON
  //--------------------------------------------------
  let divPokemonInfo = document.createElement('div')
  divPokemonInfo.classList = `pokemon-info`
  card.appendChild(divPokemonInfo)

  let divNumberName = document.createElement('div')
  divNumberName.classList = `number-name`
  divPokemonInfo.appendChild(divNumberName)

  let pokemonNumber = document.createElement('p')
  pokemonNumber.textContent = (code < 10) ? `#00${code}` : (code < 100) ? `#0${code}` : `#${code}`
  divNumberName.appendChild(pokemonNumber)

  let pokemonName = document.createElement('h3')
  pokemonName.textContent = firstLetter(name)
  divNumberName.appendChild(pokemonName)

  let divPokemonType = document.createElement('div')
  divPokemonType.classList = `pokemon-type`
  divPokemonInfo.appendChild(divPokemonType)

  let imgType = document.createElement('img')
  imgType.setAttribute('src', `./assets/img/Type-icons/color-icon-type-${type}.svg`)
  divPokemonType.appendChild(imgType)
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//------------------------------------------------------------------------------------------------------------------------------------------------------