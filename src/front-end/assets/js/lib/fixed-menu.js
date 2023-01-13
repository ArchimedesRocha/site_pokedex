//Menu Fixo
{
  const menuFixo = document.getElementById("js-nav-bar");

  function scrollMenu() {
    if (window.pageYOffset > 50) {
      menuFixo?.classList.add("nav-active");
    } else {
      menuFixo?.classList.remove("nav-active");
    }
  }
  document.addEventListener("scroll", scrollMenu);
}
