// ------------------ Création de la gallerie dynamique ---------------------//

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    console.log("Données reçues :", data);

    const gallery = document.querySelector(".gallery");

    data.forEach((work) => {
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
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });

// ----------------------Création des boutons filtres -----------------------------//

const filtersContainer = document.querySelector("#filters");
const categories = ["Tous", "Objets", "Appartements", "Hôtels & Restaurants"];
categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.dataset.category = cat;
  filtersContainer.appendChild(btn);

  // -- Action du bouton quand on clique --//

  btn.addEventListener("click", () => {
    console.log("tu as bien cliqué sur :", cat);
  });
});
