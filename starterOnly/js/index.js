import editNav from "./nav.js";
import Modal from "./Class/Modal.js";
import Validator from "./Class/Validator.js";
import {formFields, fieldContainer} from "./formConfig.js";


// Les fonctions utilisées sur onclick="editNav()" doivent être globales,
// en l'attribuant à la propriété window.
window.editNav = editNav;

// Initialisation du modal
Modal.launchModalEvent();

// Instanciation de la classe Validator
const validator = new Validator(fieldContainer, formFields);

// Constante pour récupérer le formaulaire par le nom
const formName = document.getElementsByName("reserve")[0];

// Fonction du formaulaire avec submit
// on empeche l'envoie de celui ci
// On réinitialise et on envoie le formulaire après validation 
formName.onsubmit = (event) => {

  event.preventDefault();
  
  if (validator.launchValidation()) {

    formName.reset();
    Modal.validation();

  }

};
