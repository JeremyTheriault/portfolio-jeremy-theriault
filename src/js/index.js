// Gestion du bouton hero
const hero = document.querySelector(".btn-hero");

if (hero) {
  hero.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  hero.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Évite les bugs de recalcul quand la barre d'adresse mobile change de taille
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  console.log("Projets trouvés :", document.querySelectorAll(".projet").length);

  const mm = gsap.matchMedia();

  // ==========================================
  // VERSION DESKTOP (> 768px)
  // Animations amples d'origine
  // ==========================================
  setTimeout(() => {
    console.log("Projets trouvés après 1s :", document.querySelectorAll(".projet").length);

    // Version Grand Écran (> 768px)
    mm.add("(min-width: 769px)", () => {
      gsap.from(".veyloria", {
        scrollTrigger: {
          trigger: ".veyloria",
          start: "top 80%",
          end: "top 0%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -1200,
        rotation: -10,
        duration: 0.8,
        ease: "back.out(1.4)"
      });

      gsap.from(".Le-Roi-Abandonne", {
        scrollTrigger: {
          trigger: ".Le-Roi-Abandonne",
          start: "top 80%",
          end: "top 0%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 1200,
        rotation: 10,
        duration: 0.8,
        ease: "back.out(1.4)"
      });

      gsap.from(".singularite", {
        scrollTrigger: {
          trigger: ".singularite",
          start: "top 80%",
          end: "top 0%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -1200,
        rotation: -10,
        duration: 0.8,
        ease: "back.out(1.4)"
      });

      gsap.from(".Again", {
        scrollTrigger: {
          trigger: ".Again",
          start: "top 80%",
          end: "top 0%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 1200,
        rotation: 10,
        duration: 0.8,
        ease: "back.out(1.4)"
      });
    });

    // Version Petits Écrans (<= 500px)
    mm.add("(max-width: 500px)", () => {
      const projets = [".veyloria", ".Le-Roi-Abandonne", ".singularite", ".Again"];
      projets.forEach(sel => {
        if (document.querySelector(sel)) {
          gsap.from(sel, {
            scrollTrigger: {
              trigger: sel,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: "power2.out"
          });
        }
      });
    });

    // Indispensable : force GSAP à recalculer les déclencheurs de scroll
    ScrollTrigger.refresh();
  }, 1000);

  // ==========================================
  // SECTIONS COMMUNES
  // ==========================================
  gsap.from(".container-lgg", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 60%",
      toggleActions: "play none none none",
    },
    y: 200,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(1.4)",
  });

  gsap.from("#contact", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    y: 100,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(1.4)",
  });

  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 100%",
      end: "top 0%",
      toggleActions: "play none none none",
    },
    y: 100,
    duration: 0.8,
    opacity: 0,
    ease: "back.out(1.4)",
  });

  gsap.to(".counter-html", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    innerText: 87 + "%",
    duration: 3,
    snap: {
    innerText: 1,
    },
  });

  gsap.to(".counter-css", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    innerText: 85 + "%",
    duration: 3,
    snap: {
    innerText: 1,
    },
  });

  gsap.to(".counter-js", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    innerText: 67 + "%",
    duration: 3,
    snap: {
    innerText: 1,
    },
  });

  gsap.to(".counter-cpp", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    innerText: 8 + "%",
    duration: 3,
    snap: {
    innerText: 1,
    },
  });

  gsap.to(".counter-cms", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    innerText: 73 + "%",
    duration: 3,
    snap: {
    innerText: 1,
    },
  });

  gsap.to(".bar-html", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    width: 87 + "%",
    duration: 0.5,
  });

  gsap.to(".bar-css", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    width: 85 + "%",
    duration: 0.5,
  });

  gsap.to(".bar-js", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    width: 67 + "%",
    duration: 0.5,
  });

  gsap.to(".bar-cpp", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    width: 8 + "%",
    duration: 0.5,
  });

  gsap.to(".bar-cms", {
    scrollTrigger: {
      trigger: ".container-lgg",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    width: 73 + "%",
    duration: 0.5,
  });

  // Animations SplitText
  if (document.querySelector("#projets h2")) {
    const splitProjets = new SplitText("#projets h2", { type: "chars" });
    gsap.from(splitProjets.chars, {
      scrollTrigger: {
        trigger: "#projets h2",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
      scale: 0,
      y: 30,
      rotation: () => gsap.utils.random(-20, 20),
      stagger: { each: 0.04, from: "random" },
      duration: 0.4,
      ease: "back.out(2)",
    });
  }

  if (document.querySelector("#Langages h3")) {
    const splitLangages = new SplitText("#Langages h3", { type: "chars" });
    gsap.from(splitLangages.chars, {
      scrollTrigger: {
        trigger: "#Langages h3",
        start: "top 50%",
        end: "top 10%",
        toggleActions: "play none none none",
      },
      scale: 0,
      y: 30,
      rotation: () => gsap.utils.random(-20, 20),
      stagger: { each: 0.04, from: "random" },
      duration: 0.4,
      ease: "back.out(2)",
    });
  }

  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "var(--header-color)";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
});

// Recalcul une fois les images et styles totalement chargés
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
