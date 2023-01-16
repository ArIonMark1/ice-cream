(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-prod3]"),
    closeModalBtn: document.querySelector("[data-modal-close-prod3]"),
    modal: document.querySelector("[data-modal-prod3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();