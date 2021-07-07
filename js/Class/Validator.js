// Création de la classe Validator
export default class Validator {

  #formValid = true;

  constructor(fieldContainer, formFields) {

    this.fieldContainer = fieldContainer;

    this.formFields = formFields;

  }
  // Fonction qui flag si on a passé tous les tests de validation
  // qui sera donc a true.
  getFormValid = () => this.#formValid;
  // Fonction avec un paramètre a true, qui passera a false si un message n'est pas valide
  setFormValid = (state) => (this.#formValid = state);

  // Fonctions pour les controles sur les différents types de validation
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

  // Réinitialise les erreurs sur les input  
  // et définit la valeur par défaut pour la propriété #formValid
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
  // pour chaque élément de formFields
  launchValidation = () => {
    // Validation du formulaire réinitialisée
    this.resetValidation();
    // Boucle pour chaque input du formulaire
    // avec un switch pour check les différents type d'input
    // et afficher un message d'erreur si la saisie n'est pas conforme
    for (const field in this.formFields) {
      // On test les différents cas sur le type de validation du FormFields
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
    // On retourne 'true' si toutes les entrées sont valides
    return this.getFormValid();

  };

}
