// ------------------ Récupération des works ---------------------//

export async function fetchWorks() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    return [];
  }
}

// ------------------ Affichage de la galerie ---------------------//

export function displayGallery(works) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  works.forEach((work) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = work.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  });
}

// ------------------ Création des filtres ---------------------//

export function createFilters() {
  const filtersContainer = document.querySelector("#filters");
  const categories = ["Tous", "Objets", "Appartements", "Hôtels & Restaurants"];

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.dataset.category = cat;

    btn.addEventListener("click", () => {
      console.log("tu as bien cliqué sur :", cat);
    });

    filtersContainer.appendChild(btn);
  });
}

// ------------------ Initialisation ---------------------//

async function init() {
  const works = await fetchWorks();
  displayGallery(works);
  createFilters();
}

init();
