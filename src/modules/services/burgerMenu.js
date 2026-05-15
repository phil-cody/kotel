export const burgerMenu = () => {
  const modal = document.querySelector(".header__form-modal");

  const menu = document.querySelector(".burger-menu");
  const burgerBtn = document.querySelector(".header__burger");

  const overlay = document.querySelector(".header__overlay");

  console.log(overlay)

  let isMenuOpen = false;

  function openMenu() {

    menu.classList.add("burger-menu__open");
    overlay.classList.add("active");

    isMenuOpen = true;
  }

  function closeMenu() {
    menu.classList.remove("burger-menu__open");
    overlay.classList.remove("active");
    isMenuOpen = false;
  }

  burgerBtn.addEventListener("click", openMenu);

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      isMenuOpen &&
      (target.classList.contains("header__overlay") ||
        target.classList.contains("burger-menu__close") ||
        target.closest(".burger-menu__close"))
    ) {
      closeMenu();
    }
  });
};
