const btnDropdownSelect = document.querySelector('.js-open-select');

btnDropdownSelect.addEventListener('click', () => {
  btnDropdownSelect.parentElement.classList.toggle('active');
})