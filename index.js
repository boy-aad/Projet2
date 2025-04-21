const formulaire =document.querySelector('.formulaire')
const formDisplay = document.getElementById('signUp')
const signUp = document.getElementById('creerCompte')
const inscription = document.getElementsByClassName("creation-compte")
signUp.addEventListener('click',() => {
  formulaire.style.display = "block";
})
//

 formDisplay.addEventListener('click', () => {
  formulaire.style.display = "block";
 })

//validation formulaire
const validForm = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const confirmation = document.getElementById('confirmation');

const FormulaireStatut = document.querySelector('.form-status');

const nameCheck= document.getElementById('nomHelp');
const prenomCheck= document.getElementById('prenomHelp');
const EmailCheck= document.getElementById('emailHelp');
const PasswordCheck= document.getElementById('mdpHelp');
const confirmationCheck= document.getElementById('confirmHelp');

//Validation pour nom et prenom avec Le pattern ...//
nom.addEventListener('input', () => {  
  if (nom.value.trim() === "") {
    nameCheck.textContent = "Champ requis";
    nameCheck.style.color = "red"
  }else{
    nameCheck.textContent = "";
  }
})

prenom.addEventListener('input', () => {
  if (prenom.value.trim() === "") {
    prenomCheck.textContent = "Champ requis";
    prenomCheck.style.color = "red";
  }else{
    prenomCheck.textContent = "";
  }
})

// validation pour le champ Email //

email.addEventListener('input', () => {
  const  emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (email.value.trim() === "") {
    EmailCheck.textContent = "L'adresse email est requise";
    EmailCheck.style.color = "red";
  }else if (!emailRegex.test(email.value)) {
    EmailCheck.textContent = "Format email incorrect";
    EmailCheck.style.color = "red";
  }else{
    EmailCheck.textContent = "";
  }
})

// validation mdp //
password.addEventListener('input', () => {
  const  passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (password.value.trim() === "") {
    PasswordCheck.textContent = "Veuiller saisir un mot de pass";
    PasswordCheck.style.color = "red";
  }else if (!passwordRegex.test(password.value)) {
    PasswordCheck.textContent = "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial caractères minimum";
    PasswordCheck.style.color = "red";
  }else{
    PasswordCheck.textContent = "";
  }
})
// validation confirmation mdp //
confirmation.addEventListener('input', () => {
  if (confirmation.value.trim() === "") {
    confirmationCheck.textContent = "Veuiller confirmer votre mot de pass";
    confirmationCheck.style.color = "red"
  }else  {
    checkPasswordMatch(); 
  }
})


// creation d'une fonction pour comparer les 2 mdp //
const checkPasswordMatch = () => {
  if(password.value !== confirmation.value) {
    confirmationCheck.textContent = "Le mot de passe n'est pas conforme";
     confirmationCheck.style.color = "red"
  }else {
    confirmationCheck.textContent = ""
  }
}

// validation finale du formulaire //

validForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Vérifions d'abord si tous les champs sont valides
  const formulaireValid = 
    nameCheck.textContent === "" &&
    prenomCheck.textContent === "" &&
    EmailCheck.textContent === "" &&
    PasswordCheck.textContent === "" &&
    confirmationCheck.textContent === "" &&
    nom.value.trim() !== "" &&
    prenom.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    confirmation.value.trim() !== "";

  if (formulaireValid) {
    FormulaireStatut.style.color = "green";
    FormulaireStatut.textContent = "Formulaire valide";
    ProgressBar();
    
    const photo = document.getElementById("photo").files[0];
    const userphoto = photo.value;
    if (photo) {
      const reader = new FileReader();
      
      reader.onload = function () {
      const photoBase64 = reader.result;
      const userphotoBase64 = reader.result;

      // Stockage dans localStorage
      const UserName = nom.value.trim();
      const UserLastName = prenom.value.trim();
      const Useremail = email.value.trim();

      localStorage.setItem("nom", UserName);
      localStorage.setItem("prenom", UserLastName);
      localStorage.setItem("email", Useremail);
      localStorage.setItem("photo", photoBase64);
      localStorage.setItem("userphoto", userphotoBase64);

      // Redirection vers la page d'accueil
      setTimeout(() => {
        window.location.href = "accueil.html";
      }, 2000); // Attendre la fin de la barre de progression
      };

      reader.readAsDataURL(photo, userphoto);
    } else {
      FormulaireStatut.style.color = "red";
      FormulaireStatut.textContent = "Veuillez ajouter une photo.";
    }
  }
});
 // creer une fonction pour la barre de progression //

const ProgressBar = () => {
  let progress = 0;
  const progressBar = document.getElementById("progressBar");
  let showProgress = document.getElementById('progressContainer')
  showProgress.style.display = "block";
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      formulaire.style.display = "none";
      signUp.style.display = "none";
      showProgress.style.display = "none";
    } else {
      progress++;
      progressBar.style.width = progress + "%";
      progressBar.textContent = progress + "%";
    }
  }, 50); // met à jour toutes les 50ms
}




