const sections = document.querySelectorAll(".section");
const navList = document.querySelector(".mobile-nav-list");
const navCloseBtn = document.querySelector(".btn-close-mobile-nav");
const menuBtn = document.querySelector(".menu-btn");
const navMobileBtn = document.querySelector(".btn-mobile-nav");

const mobileNavToggle = function () {
  // move the body and show the nav
  navList.classList.toggle("mobile-nav-list-active");
  sections.forEach((sec) => sec.classList.toggle("nav-open"));
  // hide the nav menu button
  menuBtn.classList.toggle("open");
};

navMobileBtn.addEventListener("click", () => {
  mobileNavToggle();
});
navCloseBtn.addEventListener("click", function (e) {
  mobileNavToggle();
});
// smooth scrolling
navList.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav-link")) return;
  const sectionId = e.target.getAttribute("href").split("#")[1];
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  navToggle();
  menuToggle();
});
// section reveal

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.01,
});

sections.forEach(function (section) {
  // avoiding nav and header when revealing sections
  if (
    section.classList.contains("header") ||
    section.classList.contains("section-hero") ||
    section.classList.contains("footer") ||
    section.classList.contains("section-flavors")
  ) {
    return;
  }
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.closest(".flavor-img").classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
