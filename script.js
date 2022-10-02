const mobileNav = function () {
  const sections = document.querySelectorAll(".section");
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
    navList.classList.toggle("nav-list-active");
    sections.forEach((sec) => sec.classList.toggle("nav-open"));
  });
};
mobileNav();
