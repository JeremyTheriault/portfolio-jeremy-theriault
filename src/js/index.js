const hero = document.querySelector(".btn-hero");

hero.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.key === ' ' && event.preventDefault();
        window.scrollTo(0, 0);
    }
});






document.addEventListener("DOMContentLoaded", () => {
  // 1. Enregistrer le plugin
  gsap.registerPlugin(ScrollTrigger);

  // 2. Vérifier si l'élément existe bien
  console.log("Projets trouvés :", document.querySelectorAll(".projet").length);


  gsap.from("#Hero", {
    scrollTrigger: {
      trigger: "#Hero",
      start: "top 60%",
      toggleActions: "play none none none",
      markers: true, // Doit afficher des traits verts et rouges à l'écran
    },
    x: -1200,
    rotation: -5,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(1.4)"
  });

    gsap.from(".veyloria", {
      scrollTrigger: {
        trigger: ".projet.veyloria",
        start: "top 90%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      opacity: 0,
      x: -1200,
      rotation: -10,
      duration: 0.8,
      ease: "back.out(1.4)"
    });


    gsap.from(".Le-Roi-Abandonne", {
      scrollTrigger: {
        trigger: ".projet.Le-Roi-Abandonne",
        start: "top 90%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      opacity: 0,
      x: 1200,
      rotation: 10,
      duration: 0.8,
      ease: "back.out(1.4)"
    });


    gsap.from(".singularite", {
      scrollTrigger: {
        trigger: ".projet.singularite",
        start: "top 90%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      opacity: 0,
      x: -1200,
      rotation: -10,
      duration: 0.8,
      ease: "back.out(1.4)"
    });


    gsap.from(".Again", {
      scrollTrigger: {
        trigger: ".projet.Again",
        start: "top 90%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      opacity: 0,
      x: 1200,
      rotation: 10,
      duration: 0.8,
      ease: "back.out(1.4)"
    });


    gsap.from(".container-lgg", {
      scrollTrigger: {
        trigger: ".container-lgg",
        start: "top 60%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      y: 200,
      duration: 0.8,
      opacity: 0,
      ease: "back.out(1.4)"
    });


    gsap.from("#contact", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 60%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      y: 100,
      duration: 0.8,
      opacity: 0,
      ease: "back.out(1.4)"
    });


    gsap.from("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 100%",
        toggleActions: "play none none none",
        markers: true, // Doit afficher des traits verts et rouges à l'écran
      },
      y: 100,
      duration: 0.8,
      opacity: 0,
      ease: "back.out(1.4)"
    });


    
gsap.to(".counter-html", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  innerText: 87+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-css", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  innerText: 85+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-js", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  innerText: 67+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-cpp", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  innerText: 8+"%", duration: 3,
  snap: {
    innerText: 1
  }
});
gsap.to(".counter-cms", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  innerText: 73+"%", duration: 3,
  snap: {
    innerText: 1
  }
});

gsap.to(".bar-html", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  width: 87+"%", duration: 0.5,
});
gsap.to(".bar-css", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  width: 85+"%", duration: 0.5,
});
gsap.to(".bar-js", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  width: 67+"%", duration: 0.5,
});
gsap.to(".bar-cpp", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  width: 8+"%", duration: 0.5,
});
gsap.to(".bar-cms", {
  scrollTrigger: {
    trigger: ".container-lgg",
    start: "top 90%",
    toggleActions: "play none none none",
    markers: true, // Doit afficher des traits verts et rouges à l'écran
  },
  width: 73+"%", duration: 0.5,
});

  });
