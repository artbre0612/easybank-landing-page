const toggleMenuBtn = document.querySelector(".toggle-menu-btn");
const menu = document.querySelector(".menu");

toggleMenuBtn.addEventListener("click", () => {
  menu.classList.contains("opacity-0")
    ? menu.classList.replace("opacity-0", "opacity-1")
    : menu.classList.replace("opacity-1", "opacity-0");
});
