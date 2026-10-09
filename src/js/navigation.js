const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => { 
    // Alterne la classe "open" sur la nav et "active" sur le burger
    burger.classList.toggle("active");
    burger.style.justifyContent = "space-between";
    nav.classList.toggle("open");
});

burger.addEventListener('keydown', () => {
  // Vérifie si la touche pressée est "Enter" (ou " ")
  if (event.key === 'Enter') {
    event.key === ' ' && event.preventDefault(); // Évite que la page ne descende avec la barre d'espace
    nav.classList.toggle("open");
  }
});

