// Création de la classe Validator
export default class Validator {

  #formValid = true;

  constructor(fieldContainer, formFields) {

    this.fieldContainer = fieldContainer;

    this.formFields = formFields;

  }

  getFormValid = () => this.#formValid;

  setFormValid = (state) => (this.#formValid = state);

  // Fonctions pour les types de validation
  nameValidation = (name) =>
    name.value !== null && name.value.length >= 2 ? true : false;

  emailValidation = (email) =>
    /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/.test(email.value);

  numberValidation = (number) => /^[0-9]+$/.test(number.value);

  radioValidation = (radio) => {
    for (let element of radio) if (element.checked) return true;
  };

  checkboxValidation = (checkbox) => checkbox.checked;

  dateValidation = (date) => (date.value != "" ? true : false);

  // Réinitialiser le style des champs d'erreurs 
  // et définir la valeur par défaut pour la propriété #formValid
  resetValidation = () => {

    this.setFormValid(true);

    Array.from(this.fieldContainer).map((field) => {

      field.dataset.errorVisible = false;

    });

  };

  // Ajout des styles css pour les input invalides et affichage des messages
  invalidInputStyle = (input, invalidMessage) => {

    input.parentNode.setAttribute("data-error-visible", true);

    input.parentNode.setAttribute("data-error", invalidMessage);

  };

  // Vérification de la validité des saisies des différents types des input
  // pour chaque élément pour l'attribut formFields
  launchValidation = () => {
    // Validation du formulaire réinitialisée
    this.resetValidation();

    for (const field in this.formFields) {

      switch (this.formFields[field].validationType) {

        case "name":

          if (!this.nameValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element,
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        case "email":

          if (!this.emailValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element,
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        case "number":

          if (!this.numberValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element,
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        case "radio":

          if (!this.radioValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element[0],
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        case "checkbox":

          if (!this.checkboxValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element,
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        case "date":

          if (!this.dateValidation(this.formFields[field].element)) {

            this.invalidInputStyle(
              this.formFields[field].element,
              this.formFields[field].invalidMessage
            );

            this.setFormValid(false);

          }

          break;

        default:

          break;
      }

    }

    return this.getFormValid();

  };

}
