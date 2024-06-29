const toggleMenuBtn = document.querySelector(".toggle-menu-btn");
const menu = document.querySelector(".menu");
const bgBlur = document.querySelector(".bg-blur");

toggleMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  bgBlur.classList.toggle("blur-sm");
});

window.addEventListener("resize", () => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
    bgBlur.classList.remove("blur-sm");
  }
});
