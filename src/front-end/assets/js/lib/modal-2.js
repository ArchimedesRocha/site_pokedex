{
  const allCardsTwo = document.querySelectorAll(".js-open-modal-two");
  const allModalsTwo = document.querySelectorAll(".s-modal-two");

  allCardsTwo.forEach((filterTwo, indexTwo) => {
    filterTwo.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allCardsTwo.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filterTwo.classList.add("active-tab");

      //Ação de Remover
      allModalsTwo.forEach((modal) => {
        modal.classList.remove("activedone");
      });

      //Ação de Adicionar
      allModalsTwo[indexTwo].classList.add("activedone");
    });
  });

  const allClosesTwo = document.querySelectorAll(".js-close-modal-two");
  const ModalsTwo = document.querySelectorAll(".s-modal-two");

  allClosesTwo.forEach((filterTwo) => {
    filterTwo.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allClosesTwo.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filterTwo.classList.add("active-tab");

      //Ação de Remover
      ModalsTwo.forEach((modal) => {
        modal.classList.remove("activedone");
      });
    });
  });
}
