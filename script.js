// Smooth behavior on nav clicks
document.querySelector(".nav-links").addEventListener("click", function (e) {
  // Prevet for from submitting
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Reveal section using Observer

// 1- specify all of the sections at ones
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
