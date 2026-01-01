






const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links-wrapper");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links-wrapper a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
















































