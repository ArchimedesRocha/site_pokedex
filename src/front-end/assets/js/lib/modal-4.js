{
  const allTax = document.querySelectorAll(".js-open-modal-taxonomia");
  const allTaxModal = document.querySelectorAll(".s-modal-taxonomia");

  console.log(allTax);

  allTax.forEach((filter, index) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allTax.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filter.classList.add("active-tab");

      //Ação de Remover
      allTaxModal.forEach((modal) => {
        modal.classList.remove("activedone");
      });

      //Ação de Adicionar
      allTaxModal[index].classList.add("activedone");
    });
  });

  const allTaxClose = document.querySelectorAll(".js-close-modal-taxonomia");
  const modalsTax = document.querySelectorAll(".s-modal-taxonomia");

  allTaxClose.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allTaxClose.forEach((cards) => {
        cards.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filter.classList.add("active-tab");

      //Ação de Remover
      modalsTax.forEach((modal) => {
        modal.classList.remove("activedone");
      });
    });
  });
}
