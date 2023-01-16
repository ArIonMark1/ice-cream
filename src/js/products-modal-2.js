(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-prod2]"),
    closeModalBtn: document.querySelector("[data-modal-close-prod2]"),
    modal: document.querySelector("[data-modal-prod2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();