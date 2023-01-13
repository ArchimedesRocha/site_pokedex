{
  const allCards = document.querySelectorAll(".js-open-modal");
  const allModals = document.querySelectorAll(".s-modal");

  allCards.forEach((filter, index) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allCards.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filter.classList.add("active-tab");

      //Ação de Remover
      allModals.forEach((modal) => {
        modal.classList.remove("activedone");
      });

      //Ação de Adicionar
      allModals[index].classList.add("activedone");
    });
  });

  const allCloses = document.querySelectorAll(".js-close-modal");
  const ModalsTwo = document.querySelectorAll(".s-modal");

  allCloses.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allCloses.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filter.classList.add("active-tab");

      //Ação de Remover
      ModalsTwo.forEach((modal) => {
        modal.classList.remove("activedone");
      });
    });
  });
}
