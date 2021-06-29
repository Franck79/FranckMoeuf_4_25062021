import editNav from "./nav.js";
import Modal from "./Class/Modal.js";
import Validator from "./Class/Validator.js";
import {formFields, fieldContainer} from "./formConfig.js";


/* Functions used in onxyz-attribute-style handlers (onclick="editNav()) must be globals,
   make it a global by assigning to a window property  */
window.editNav = editNav; //💩

// initialize modal 🚀
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
