const mobileNav = function () {
  const header = document.querySelector(".header");
  const mainContainer = document.querySelector(".main-container");
  const navList = document.querySelector(".nav-list");
  const menuBtn = document.querySelector(".menu-btn");
  const navBtnContainer = document.querySelector(".nav-mobile");
  let menuOpen = false;
  navBtnContainer.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }

    header.classList.toggle("nav-open");
    mainContainer.classList.toggle("nav-open");
  });
};
mobileNav();
