{
  const allCardsHome = document.querySelectorAll(".js-open-modal-home");
  const allModalsHome = document.querySelectorAll(".s-modal-home");

  allCardsHome.forEach((filterHome, indexHome) => {
    filterHome.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allCardsHome.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filterHome.classList.add("active-tab");

      //Ação de Remover
      allModalsHome.forEach((modal) => {
        modal.classList.remove("activedone");
      });

      //Ação de Adicionar
      allModalsHome[indexHome].classList.add("activedone");
    });
  });

  const allClosesHome = document.querySelectorAll(".js-close-modal-home");
  const ModalsHome = document.querySelectorAll(".s-modal-home");

  allClosesHome.forEach((filterHome) => {
    filterHome.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allClosesHome.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filterHome.classList.add("active-tab");

      //Ação de Remover
      ModalsHome.forEach((modal) => {
        modal.classList.remove("activedone");
      });
    });
  });
}
