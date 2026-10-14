let projectsList = [];

async function loadProjects() {
  const response = await fetch("./src/data/projects.json");
  const projects = await response.json();
  return projects;
}

async function init() {
  projectsList = await loadProjects();
  const project_grid = document.querySelector(".container-projets");

  if (!project_grid) return;
  projectsList.forEach((project) => {
    project_grid.insertAdjacentHTML(
      "beforeend",
      `
        <div tabindex="0" class="projet ${project.id}" data-id="${project.id}">
          <div class="flex">
            <h3> ${project.category} </h3>
            <span> ${project.year} </span>
          </div>
          <h4> ${project.title} </h4>
          <p> ${project.description} </p>
          <div class="competences">
            ${project.tech ? project.tech.map((t) => `<span>${t}</span>`).join("") : ""}
          </div>
        </div>
      `,
    );
  });

  setupModal();
}

function setupModal() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close");
  const modalImg = modal.querySelector("#modal-img");
  const modalCategory = modal.querySelector("#modal-category");
  const modalYear = modal.querySelector("#modal-year");
  const modalTitle = modal.querySelector("#modal-title");
  const modalDesc = modal.querySelector("#modal-desc");
  const modalTech = modal.querySelector("#modal-tech");
  const modalLink = modal.querySelector("#modal-link");

  // Fonction pour afficher les détails du projet
  const openProjectDetails = (card) => {
    const projectId = card.dataset.id;
    const project = projectsList.find((p) => p.id === projectId);

    if (!project) return;

    // Remplissage des données
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalYear.textContent = project.year;
    modalDesc.textContent = project.description_longue;

    // Image (si définie dans le JSON)
    if (project.image) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalImg.parentElement.style.display = "block";
    } else {
      modalImg.parentElement.style.display = "none";
    }

    // Compétences / Technologies
    if (project.tech && project.tech.length > 0) {
      modalTech.innerHTML = project.tech.map((t) => `<span>${t}</span>`).join("");
      modalTech.style.display = "flex";
    } else {
      modalTech.innerHTML = "";
      modalTech.style.display = "none";
    }

    // Bouton de lien
    if (project.link || project.url) {
      modalLink.href = project.link || project.url;
      modalLink.style.display = "inline-flex";
    } else {
      modalLink.style.display = "none";
    }

    // Affichage de la modale
    modal.showModal();
    document.body.style.overflow = "hidden";
  };

  // 1. Clic sur la carte
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".projet");
    if (card) {
      openProjectDetails(card);
    }
  });

  // 2. Accessibilité au clavier : Touche Entrée sur une carte ciblée
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const card = document.activeElement.closest(".projet");
      if (card) {
        openProjectDetails(card);
      }
    }
  });

  // 3. Fermeture par la croix
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close();
      document.body.style.overflow = "";
    });
  }

  // 4. Fermeture au clic à l'extérieur (sur le backdrop)
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
      document.body.style.overflow = "";
    }
  });

  // 5. Rétablissement du défilement lors d'une fermeture avec Échap
  modal.addEventListener("cancel", () => {
    document.body.style.overflow = "";
  });
}

init();