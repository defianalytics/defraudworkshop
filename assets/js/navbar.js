const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    const targetPosition = target.offsetTop - 50;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionPosition = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionPosition &&
      scrollPosition < sectionPosition + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (section.getAttribute("id") === link.getAttribute("href").substring(1)) {
          link.classList.add("active");
        }
      });
    }
  });
}
);