import editNav from "./nav.js";
import Modal from "./Class/Modal.js";
import Validator from "./Class/Validator.js";
import {formFields, fieldContainer} from "./formConfig.js";

// La fonction utilisée sur onclick="editNav()" doit être globale,
// en l'attribuant à la propriété window.
window.editNav = editNav;

// Initialisation du modal
Modal.launchModalEvent();

// Instanciation de la classe Validator
// en ajoutant en arguments les constantes du fichier formConfig.js
const validator = new Validator(fieldContainer, formFields);

// Constante pour récupérer le formulaire par le nom
const formName = document.getElementsByName("reserve")[0];

// Fonction du formaulaire avec submit
// on empeche l'envoie de celui ci
// On réinitialise et on envoie le formulaire après validation 
formName.onsubmit = (event) => {

  event.preventDefault();

  const values = {};
  //Affichage des valuers des entrées du formulaire
  // après validation et confirmation
  // Boucle sur les champs du formulaire
  Object.keys(formFields).forEach((formFieldsKey) => {
    // On stock les ID des champs du formulaire
    const element = formFields[formFieldsKey].element;
    // On stock le type des champs du formulaire
    const type = formFields[formFieldsKey].validationType;
    // Initialisation de la variable afin de stocker la valeur du bouton radio selectionné
    let radioValue;
    // On récupère les valeurs des entrées
    const value = element && element.value;
    // On push les valeurs dans l'array avec la correspondance des clés
    values[formFieldsKey] = value;
    // Condition sur le type radio
    if (type === "radio") {
      // Boucle sur tous les boutons radio
      for (let i = 0; i < element.length; i++) {
        // On cherche le bouton radio qui est selectionné
        if (element[i].checked) {
            // On stock la valeur trouvée
            radioValue = element[i].value;
            // On écrit la valeur sur la bonne clé
            values['location'] = radioValue;
            
        }
        
      }
      
    }

  })
  // On affiche dans le log les clé des champs du formulaire avec leurs valeurs
  console.log(values);
  // Condition pour la validation du formulaire
  if (validator.launchValidation()) {
    // Si la méthode return 'true' on reset le formulaire
    formName.reset();
    // On affiche le message de confirmation
    Modal.validation();

  }

};
