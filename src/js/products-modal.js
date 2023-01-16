(() => {
  const refs = {
    openModalBtn: document.querySelector("[prod-data-modal-open]"),
    closeModalBtn: document.querySelector("[prod-data-modal-close]"),
    modal: document.querySelector("[prod-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();