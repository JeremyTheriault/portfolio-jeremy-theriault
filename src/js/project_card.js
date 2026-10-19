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
  const modalContext = modal.querySelector("#modal-context");

  // Nouveaux éléments
  const modalRole = modal.querySelector("#modal-role");
  const modalTeam = modal.querySelector("#modal-team");
  const modalProcessContainer = modal.querySelector("#modal-process-container");
  const modalProcessList = modal.querySelector("#modal-process-list");

  // Fonction pour afficher les détails du projet
  const openProjectDetails = (card) => {
    const projectId = card.dataset.id;
    const project = projectsList.find((p) => p.id === projectId);

    if (!project) return;

    // Remplissage des données de base
    modalTitle.textContent = project.title || "";
    modalCategory.textContent = project.category || "";
    modalYear.textContent = project.year || "";
    modalContext.textContent = project.context || "";
    modalDesc.textContent = project.description_longue || project.description || "";

    // Rôle et Équipe
    if (modalRole) {
      modalRole.innerHTML = project.role ? `<strong>Rôle :</strong> ${project.role}` : "";
    }
    if (modalTeam) {
      modalTeam.innerHTML = project.team ? `<strong>Équipe :</strong> ${project.team}` : "";
    }

    // Processus de création
    if (modalProcessContainer && modalProcessList) {
      if (project.process && project.process.length > 0) {
        modalProcessList.innerHTML = project.process
          .map(
            (step) => `
            <li>
              <strong>${step.step} :</strong> ${step.detail}
            </li>
          `
          )
          .join("");
        modalProcessContainer.style.display = "block";
      } else {
        modalProcessList.innerHTML = "";
        modalProcessContainer.style.display = "none";
      }
    }

    // Image
    if (project.image) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalImg.parentElement.style.display = "block";
    } else {
      modalImg.parentElement.style.display = "none";
    }

    // Compétences / Technologies
    if (project.tech && project.tech.length > 0) {
      modalTech.innerHTML = project.tech
        .map((t) => `<span>${t}</span>`)
        .join("");
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

    modal.showModal();
    document.body.style.overflow = "hidden";
  };

  // Clic sur la carte
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".projet");
    if (card) {
      openProjectDetails(card);
    }
  });

  // Accessibilité clavier (Entrée / Espace)
  document.addEventListener("keydown", (event) => {
    const isEnter =
      event.key === "Enter" ||
      event.code === "Enter" ||
      event.code === "NumpadEnter";
    const isSpace = event.key === " " || event.code === "Space";

    if (!isEnter && !isSpace) return;
    if (modal.open) return;

    const targetElement = event.target || document.activeElement;
    const card = targetElement ? targetElement.closest(".projet") : null;

    if (card) {
      event.preventDefault();
      openProjectDetails(card);
    }
  });

  // Fermeture par la croix
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close();
      document.body.style.overflow = "";
    });
  }

  // Fermeture au clic à l'extérieur
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
      document.body.style.overflow = "";
    }
  });

  // Fermeture avec Échap
  modal.addEventListener("cancel", () => {
    document.body.style.overflow = "";
  });
}

init();
