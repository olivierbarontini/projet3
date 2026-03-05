const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    } else if (response.status === 401) {
      document.querySelector(".error-message").textContent =
        "Erreur dans l’identifiant ou le mot de passe";
    } else {
      document.querySelector(".error-message").textContent =
        "Une erreur est survenue";
    }
  } catch (error) {
    console.error("Erreur :", error);
    document.querySelector(".error-message").textContent =
      "Impossible de se connecter au serveur";
  }
});
