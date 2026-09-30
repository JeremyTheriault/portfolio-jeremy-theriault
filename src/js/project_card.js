async function loadProjects() {
  const response = await fetch("./src/data/projects.json"); // 1. la réponse du serveur
  const projects = await response.json(); // 2. le contenu, converti
  return projects; // 3. un tableau de projets
}

async function init() {
  const projects = await loadProjects();
  const project_grid = document.querySelector(".container-projets");

  console.table(projects);
  projects.forEach((project) => {
    console.log(project.title);
  });

  projects.forEach((project) => {
    project_grid.insertAdjacentHTML(
      "beforeend",
      `<div class="projet">
                    <div class="flex">
                        <h3> ${project.category} </h3>
                        <span> ${project.year} </span>
                    </div>
                    <h4> ${project.title} </h4>
                    <p> ${project.description} </p>

                    <div class="competences">
                        ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
                    </div>
        </div>`,
    );
  });

  function createProjectCard(project) {
    return;
  }
}

init();
