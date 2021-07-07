// Constante pour récupérer les id des input du formulaire
// Type de validation
// et messages d'erreur
const formFields = {
  firstName: {
    element: document.getElementById("first"),
    validationType: "name",
    invalidMessage: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  },
  lastName: {
    element: document.getElementById("last"),
    validationType: "name",
    invalidMessage: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  email: {
    element: document.getElementById("email"),
    validationType: "email",
    invalidMessage: "Veuillez entrer une adresse mail valide."
  },
  birthdate: {
    element: document.getElementById("birthdate"),
    validationType: "date",
    invalidMessage: "Vous devez entrer votre date de naissance."
  },
  quantity: {
    element: document.getElementById("quantity"),
    validationType: "number",
    invalidMessage: "Veuillez entrer un nombre."
  },
  location: {
    element: document.querySelectorAll('input[name="location"]'),
    validationType: "radio",
    invalidMessage: "Veuillez selectionner une ville."
  },
  checkbox: {
    element: document.getElementById("checkbox1"),
    validationType: "checkbox",
    invalidMessage: "Vous devez vérifier que vous acceptez les termes et conditions."
  },
};

// Constante contenant toutes les input du formulaire
const fieldContainer = document.querySelectorAll(".formData");

export { formFields, fieldContainer};
