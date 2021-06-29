// Création de la classe Modal
export default class Modal {
  // Elements du DOM
  static dom = {
    modalbg: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    closeBtn: document.querySelector(".close"),
    closeConfirm: document.querySelector(".close-confirm"),
    modalConfirm: document.querySelector(".confirm-modal"),
    form: document.getElementsByName("reserve")[0],
  };

  // On lance l'événement modal, 
  // On ajoute un Event/Listener sur le click pour ouvrir le modal 
  // et le fermer avec le bouton de fermeture
  static launchModalEvent = () => {
    this.dom.modalBtn.forEach((btn) =>
      btn.addEventListener("click", this.launchModal)
    );

    this.dom.closeBtn.addEventListener("click", this.closeModal);
    this.dom.closeBtn.addEventListener("click", this.closeConfirm);
    this.dom.closeConfirm.addEventListener("click", this.closeConfirm);

  };

  // On lance le formulaire modal, 
  // On affiche le modal avec le mode d'affichage css "block"
  static launchModal = () => (this.dom.modalbg.style.display = "block");

  // Fermeture du modal, 
  // On masque le modal avec la propriété css "none"
  static closeModal = () => (this.dom.modalbg.style.display = "none");

  // On supprime la confirmation du modal, 
  // On réinitialise l'affichage du modal
  static closeConfirm = () => {
    this.closeModal();
    this.dom.form.style.display = "block";
    this.dom.modalConfirm.style.display = "none";
    this.dom.modalConfirm.classList.remove("confirm-message");
  };

  // Affichage du message de confirmation 
  // et on masque le formulaire
  static validation = () => {
    this.dom.form.style.display = "none";
    this.dom.modalConfirm.style.display = "block";
    this.dom.modalConfirm.classList.add("confirm-message");
  };
}
