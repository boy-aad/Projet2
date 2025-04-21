window.addEventListener("DOMContentLoaded", () => {
    const nom = localStorage.getItem("nom");
    const prenom = localStorage.getItem("prenom");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
    const userphoto = localStorage.getItem("userphoto");
  
    // Si y'a pas d'infos, on redirige vers le formulaire
    if (!nom || !prenom ||!email || !photo|| !userphoto) {
      window.location.href = "index.html";
      return;
    }
  
    document.getElementById("username").textContent = nom;
    document.getElementById("userprenom").textContent = prenom;
    document.getElementById("user-prenom").textContent = prenom;
    document.getElementById("user-name").textContent = nom;
    document.getElementById("user-email").textContent = email;
    document.getElementById("photo").src = photo;
    document.getElementById("userphoto").src = userphoto;
  });

  document.getElementById("logOut").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
  

  // modal / formulaire avec le bouton ajouter produit  //
  const produits = []; // pour stocker les produits
 
  const form = document.getElementById('form-produit').addEventListener('submit', (e) => {
    e.preventDefault();
   
    const produitName = document.getElementById('Nom-produit').value;
    const Quantity = document.getElementById('Quantity').value;
    const libelle = document.getElementById('description').value;

    const produit = {produitName, Quantity, libelle};
    produits.push(produit); // ajout des differents produit dans le tableaux produits
    
    AjouterProduit(produit);
    form.reset();
  })

  // creation d'une fonction permettant d'ajouter un produit//

  const AjouterProduit = (produit) => {
    const tableBody = document.getElementById('tbody');
    const ligne = document.createElement('tr');
    ligne.classList.add("ligne");

    ligne.innerHTML = `
      <td>${produit.produitName}</td>
      <td>${produit.Quantity}</td>
      <td>${produit.libelle}</td>
      <td class="actions">
        <button class="btn" id="modify" ">Modifier</button>
        <button class="btn" id="delete" ">Supprimer</button>
      </td>
    `;
    if (tableBody) {
      tableBody.appendChild(ligne);
    } else {
      console.error("Table body element not found.");
    }
  }

  // supprimer et modifier  un produit
  const tableBody = document.getElementById('tbody');

  tableBody.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'delete') {
      const row = target.closest('tr');
      if (row) {
        row.remove();
      }
    }

    if (target.id === 'modify') {
      const row = target.closest('tr');
      if (row) {
        const produitName = row.cells[0].textContent;
        const quantity = row.cells[1].textContent;
        const libelle = row.cells[2].textContent;

        const newProduit = prompt("Modifier le produit : ", produitName);
        const newQuantity = prompt("Modifier la quantité : ", quantity);
        const newLibelle = prompt("Modifier le libellé : ", libelle);

        if (newProduit !== null) {
          row.cells[0].textContent = newProduit;
        }
        if (newQuantity !== null) {
          row.cells[1].textContent = newQuantity;
        }
        if (newLibelle !== null) {
          row.cells[2].textContent = newLibelle;
        }
      }
    }
  });

  // last part //
const accueil = document.getElementById('home');
  const sectionProduit = document.getElementById('produit');
  const showProductSec = document.getElementById('add-product');
  showProductSec.addEventListener('click', () => {
    sectionProduit.style.display = 'block';
    accueil.style.display = 'none';
  })