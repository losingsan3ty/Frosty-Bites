const mobileNav = function () {
  const sections = document.querySelectorAll(".section");
  const navList = document.querySelector(".nav-list");
  const menuBtn = document.querySelector(".menu-btn");
  const navBtnContainer = document.querySelector(".nav-mobile");
  const navToggle = function () {
    navList.classList.toggle("nav-list-active");
    sections.forEach((sec) => sec.classList.toggle("nav-open"));
  };
  let menuOpen = false;
  navBtnContainer.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
    navToggle();
  });
  // smooth scrolling
  navList.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.classList.contains("nav-link")) return;
    const sectionId = e.target.getAttribute("href").split("#")[1];
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    navToggle();
  });
};
mobileNav();
