//--------------------------------------------------
// LISTANDO OS TIPOS DE POKEMONS
//--------------------------------------------------
const areaTypes = document.getElementById('js-type-area');

axios({
  method: 'get',
  url: 'https://pokeapi.co/api/v2/type'
})
.then(response => {
  const { results } = response.data;

  results.forEach((type, index) => {

    if(index !== 18) {
      let itemType = document.createElement('li');
      areaTypes.appendChild(itemType);
  
      let buttonType = document.createElement('button')
      buttonType.classList = `type-filter ${type.name}`
      buttonType.setAttribute('code-type', index)
      itemType.appendChild(buttonType);
  
      let srcType = document.createElement('img');
      srcType.classList = `normal-img`;
      srcType.setAttribute('src', `./assets/img/Type-icons/icon-type-${type.name}.svg`);
      buttonType.appendChild(srcType);

      let srcTypeHover = document.createElement('img');
      srcTypeHover.classList = `hover-img`;
      srcTypeHover.setAttribute('src', `./assets/img/Type-icons/color-icon-type-${type.name}.svg`);
      buttonType.appendChild(srcTypeHover);

      let nameType = document.createElement('p')
      nameType.textContent = firstLetter(type.name);
      buttonType.appendChild(nameType);

      const allTypes = document.querySelectorAll('.type-filter');

      allTypes.forEach((btn => {
        btn.addEventListener('click', filterByTypes)
      }))
    }
  })
})

function filterByTypes() {
  console.log('clicou')
}

