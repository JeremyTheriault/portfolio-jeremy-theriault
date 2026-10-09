const hero = document.querySelector(".btn-hero");

hero.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.key === ' ' && event.preventDefault();
        window.scrollTo(0, 0);
    }
});





gsap.to(".counter-html", {
  innerText: 87+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-css", {
  innerText: 85+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-js", {
  innerText: 67+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-cpp", {
  innerText: 8+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-cms", {
  innerText: 73+"%", duration: 3,
  snap: {
    innerText: 1
  }
});

gsap.to(".bar-html", {
  width: 87+"%", duration: 1,
  snap: {
    width: 1
  }
});
gsap.to(".bar-css", {
  width: 85+"%", duration: 1,
  snap: {
    width: 1
  }
});
gsap.to(".bar-js", {
  width: 67+"%", duration: 1,
  snap: {
    width: 1
  }
});
gsap.to(".bar-cpp", {
  width: 8+"%", duration: 1,
  snap: {
    width: 1
  }
});
gsap.to(".bar-cms", {
  width: 73+"%", duration: 1,
  snap: {
    width: 1
  }
});
