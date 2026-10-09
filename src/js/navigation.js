const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => { 
    burger.classList.toggle("active");
    burger.style.justifyContent = "space-between";
    nav.classList.toggle("open");
});

burger.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.key === ' ' && event.preventDefault();
    nav.classList.toggle("open");
    burger.classList.toggle("active");
  }
});

