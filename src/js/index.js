const hero = document.querySelector(".btn-hero");

hero.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.key === ' ' && event.preventDefault();
        window.scrollTo(0, 0);
    }
});