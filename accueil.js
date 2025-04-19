window.addEventListener("DOMContentLoaded", () => {
    const nom = localStorage.getItem("nom");
    const prenom = localStorage.getItem("prenom");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
  
    // Si y'a pas d'infos, on redirige vers le formulaire
    if (!nom || !prenom ||!email || !photo) {
      window.location.href = "index.html";
      return;
    }
  
    document.getElementById("username").textContent = nom;
    document.getElementById("userprenom").textContent = prenom;
    document.getElementById("user-prenom").textContent = prenom;
    document.getElementById("user-name").textContent = nom;
    document.getElementById("user-email").textContent = email;
    document.getElementById("photo").src = photo;
  });

  document.getElementById("logOut").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
  