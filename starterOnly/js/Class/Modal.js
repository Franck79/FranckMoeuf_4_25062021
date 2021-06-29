export default class Modal {
  // DOM Elements
  static dom = {
    modalbg: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    closeBtn: document.querySelector(".close"),
    closeConfirm: document.querySelector(".close-confirm"),
    modalConfirm: document.querySelector(".confirm-modal"),
    form: document.getElementsByName("reserve")[0],
  };

  // launch modal event, add listener for open the modal and close them with the close button or X button
  static launchModalEvent = () => {
    this.dom.modalBtn.forEach((btn) =>
      btn.addEventListener("click", this.launchModal)
    );

    this.dom.closeBtn.addEventListener("click", this.closeModal);
    this.dom.closeBtn.addEventListener("click", this.closeConfirm);
    this.dom.closeConfirm.addEventListener("click", this.closeConfirm);

  };

  // launch modal form, display the modal with css property display block
  static launchModal = () => (this.dom.modalbg.style.display = "block");

  // Close modal, hide the modal with css property display none
  static closeModal = () => (this.dom.modalbg.style.display = "none");

  //Close confirm modal, reset the display of the modal
  static closeConfirm = () => {
    this.closeModal();
    this.dom.form.style.display = "block";
    this.dom.modalConfirm.style.display = "none";
    this.dom.modalConfirm.classList.remove("confirm-message");
  };

  // Show message validation and hide form
  static validation = () => {
    this.dom.form.style.display = "none";
    this.dom.modalConfirm.style.display = "block";
    this.dom.modalConfirm.classList.add("confirm-message");
  };
}
