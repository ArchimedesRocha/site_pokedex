let activeModal = null;

const selectCard = document.querySelectorAll('.js-open-details-pokemon');
const closeCardPokemon = document.querySelectorAll('.js-close-details-pokemon');
const openModal = document.querySelectorAll('.s-modal');

function handleCardClick(event) {
  event.preventDefault();
  
  // Remove a classe "active" dos cartões selecionados
  selectCard.forEach((card) => card.classList.remove("active"));
  
  // Adiciona a classe "active" ao cartão clicado
  event.currentTarget.classList.add("active");
  
  // Remove a classe "active-modal" do modal ativo, se houver
  if (activeModal) {
    activeModal.classList.remove("active-modal");
  }
  
  // Adiciona a classe "active-modal" ao modal correspondente ao cartão clicado
  activeModal = openModal[event.currentTarget.dataset.index];
  activeModal.classList.add("active-modal");
}

function handleCloseClick() {
  activeModal.classList.remove('active-modal');
  activeModal = null;
}

selectCard.forEach((card, index) => {
  card.dataset.index = index;
  card.addEventListener("click", handleCardClick);
});

closeCardPokemon.forEach((closeBtn) => {
  closeBtn.addEventListener('click', handleCloseClick);
});