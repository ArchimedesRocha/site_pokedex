//Navegação por Tabs
{
  const allEnterprisesTabs = document.querySelectorAll(".emp-menu li a");
  const allEnterprises = document.querySelectorAll(".emp-enterprises-bottom");

  allEnterprisesTabs.forEach((filter, index) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();

      //Ação de Remover
      allEnterprisesTabs.forEach((tabActive) => {
        tabActive.classList.remove("active-tab");
      });

      //Ação de Adicionar
      filter.classList.add("active-tab");

      //Ação de Remover
      allEnterprises.forEach((showEnterprise) => {
        showEnterprise.classList.remove("active-emp-enterprises-bottom");
      });

      //Ação de Adicionar
      allEnterprises[index].classList.add("active-emp-enterprises-bottom");
    });
  });
}
