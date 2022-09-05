const mobileNav = function () {
  const navList = document.querySelector(".nav-list");
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
    navList.classList.toggle("nav-open");
  });
};
mobileNav();
