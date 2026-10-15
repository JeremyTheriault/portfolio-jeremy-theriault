// Détection du paramètre d'accessibilité Windows / Système
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ==========================================
// GESTION DU BOUTON HERO
// ==========================================
const hero = document.querySelector(".btn-hero");

if (hero) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  hero.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  });

  hero.addEventListener("click", () => {
    scrollToTop();
  });
}

// ==========================================
// INITIALISATION DES ANIMATIONS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Si l'utilisateur a demandé de réduire les mouvements, on applique l'état final directement
  if (prefersReducedMotion) {
    // Affiche directement les barres de progression et les pourcentages
    const stats = [
      { selBar: ".bar-html", selCount: ".counter-html", val: "87%" },
      { selBar: ".bar-css", selCount: ".counter-css", val: "85%" },
      { selBar: ".bar-js", selCount: ".counter-js", val: "67%" },
      { selBar: ".bar-cpp", selCount: ".counter-cpp", val: "8%" },
      { selBar: ".bar-cms", selCount: ".counter-cms", val: "73%" }
    ];

    stats.forEach(item => {
      const bar = document.querySelector(item.selBar);
      const counter = document.querySelector(item.selCount);
      if (bar) bar.style.width = item.val;
      if (counter) counter.innerText = item.val;
    });

    // Gestion du fond de navigation au scroll
    document.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = window.scrollY > 50 ? "var(--header-color)" : "transparent";
      }
    });

    return; // Arrête l'exécution ici : aucune animation GSAP n'est créée
  }

  // --- Code GSAP standard (quand les animations sont autorisées) ---
  gsap.registerPlugin(ScrollTrigger, SplitText);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  const mm = gsap.matchMedia();

  setTimeout(() => {
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

  // Compteurs
  const counters = [
    { sel: ".counter-html", val: 87 },
    { sel: ".counter-css", val: 85 },
    { sel: ".counter-js", val: 67 },
    { sel: ".counter-cpp", val: 8 },
    { sel: ".counter-cms", val: 73 }
  ];

  counters.forEach(c => {
    gsap.to(c.sel, {
      scrollTrigger: {
        trigger: ".container-lgg",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      innerText: c.val + "%",
      duration: 3,
      snap: { innerText: 1 },
    });
  });

  // Barres de progression
  const bars = [
    { sel: ".bar-html", val: 87 },
    { sel: ".bar-css", val: 85 },
    { sel: ".bar-js", val: 67 },
    { sel: ".bar-cpp", val: 8 },
    { sel: ".bar-cms", val: 73 }
  ];

  bars.forEach(b => {
    gsap.to(b.sel, {
      scrollTrigger: {
        trigger: ".container-lgg",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      width: b.val + "%",
      duration: 0.5,
    });
  });

  // SplitText
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
    if (header) {
      header.style.backgroundColor = window.scrollY > 50 ? "var(--header-color)" : "transparent";
    }
  });
});

window.addEventListener("load", () => {
  if (!prefersReducedMotion && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
});