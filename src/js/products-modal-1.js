(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-prod1]"),
    closeModalBtn: document.querySelector("[data-modal-close-prod1]"),
    modal: document.querySelector("[data-modal-prod1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();