import editNav from "./nav.js";
import Modal from "./Class/Modal.js";
import Validator from "./Class/Validator.js";
import {formFields, fieldContainer} from "./formConfig.js";


// Les fonctions utilisées sur onclick="editNav()) doivent être globales,
// en l'attribuant à la propriété window.
window.editNav = editNav;

// Initialisation du modal
Modal.launchModalEvent();

const validator = new Validator(fieldContainer, formFields);

const formName = document.getElementsByName("reserve")[0];

formName.onsubmit = (event) => {
  event.preventDefault();
  
  if (validator.launchValidation()) {
    formName.reset();
    Modal.validation();
  }
};
