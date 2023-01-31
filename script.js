const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.getElementById("navbar-menu");

toggleButton.addEventListener("click", () => {
  // navbarLinks.classList.toggle("active");

  navbarLinks.style.display =
    navbarLinks.style.display === "flex" ? "none" : "flex";
});
