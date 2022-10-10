const sections = document.querySelectorAll(".section");
const navList = document.querySelectorAll(".nav-list");
const mobileNavList = document.querySelector(".mobile-nav-list");
const navCloseBtn = document.querySelector(".btn-close-mobile-nav");
const menuBtn = document.querySelector(".menu-btn");
const navMobileBtn = document.querySelector(".btn-mobile-nav");
const flavorsSection = document.querySelector(".section-flavors");
const hasLazyImg = document.querySelectorAll(".has-lazy-img");
// general toggle nav function
const mobileNavToggle = function () {
  // move the body and show the nav
  mobileNavList.classList.toggle("mobile-nav-list-active");
  sections.forEach((sec) => sec.classList.toggle("nav-open"));
  // hide the nav menu button
  menuBtn.classList.toggle("open");
  navCloseBtn.classList.toggle("hidden");
};
// show nav when menu is clicked
navMobileBtn.addEventListener("click", () => {
  mobileNavToggle();
});
// close nav when cross is clicked
navCloseBtn.addEventListener("click", function (e) {
  mobileNavToggle();
});
// smooth scrolling
navList.forEach((list) => {
  list.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.classList.contains("nav-link")) return;
    const sectionId = e.target.getAttribute("href").split("#")[1];
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    if (list.classList.contains("main-nav-list")) {
      return;
    }
    mobileNavToggle();
  });
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
  threshold: [0.01],
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
// another way to fixing the problem of images not loading when the user refresh the site and the images are already in view
// const imgTargets = document.querySelectorAll("img[data-src]");
// const flavor = document.querySelector(".flavor");

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     return;
//   }
//   // Replace src with data-src
//   imgTargets.forEach((img) => {
//     img.src = img.dataset.src;
//   });
//   imgTargets.forEach((img) => {
//     img.addEventListener("load", function (e) {
//       console.log(e.target);
//       e.target.closest(".flavor-img").classList.remove("lazy-img");
//     });
//   });
//   observer.unobserve(entry.target);
// };
// ----------------------------------------------

// solution one not that optimal
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  const imgTargets = entry.target.querySelectorAll("img[data-src]");
  // Replace src with data-src
  imgTargets.forEach((img) => {
    img.src = img.dataset.src;
  });

  imgTargets.forEach((img) => {
    img.addEventListener("load", function (e) {
      e.target.closest(".lazy-img").classList.remove("lazy-img");
    });
  });
  observer.unobserve(entry.target);
};

const initIntersection = function () {};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: [0, 1],
});
imgObserver.observe(flavorsSection);
hasLazyImg.forEach((section) => imgObserver.observe(section));
