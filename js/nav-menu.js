function initializate() {
  let menuIcon = document.getElementById("nav-menu");
  menuIcon.addEventListener("click", showMenu);

  let closeIcon = document.getElementById("close-icon");
  closeIcon.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    let menu = document.getElementById("nav");
    let isClickInsideMenu = menu.contains(event.target);
    let isClickOnMenuIcon = event.target === menuIcon;

    if (!isClickInsideMenu && !isClickOnMenuIcon && menu.classList.contains("side-menu-visible")) {
      closeMenu();
    }
  });

  /* Show and hidde hamburger menu*/
  function showMenu() {
    let showMenu = document.getElementById("nav");
    showMenu.classList.add("side-menu-visible");
    showMenu.classList.remove("side-menu-hidden");
  }

  function closeMenu() {
    let showMenu = document.getElementById("nav");
    showMenu.classList.remove("side-menu-visible");
    showMenu.classList.add("side-menu-hidden");
  }
}
initializate();