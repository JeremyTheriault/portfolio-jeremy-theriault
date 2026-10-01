const name = document.querySelector(".name");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => { 
    // Alterne la classe "open" sur la nav et "active" sur le burger
    burger.classList.toggle("active");
    burger.style.justifyContent = "space-between";
    nav.classList.toggle("open");
});

