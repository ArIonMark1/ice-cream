(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-loc-open]"),
      closeModalBtn: document.querySelector("[data-modal-loc-close]"),
      modal: document.querySelector("[data-modal-loc]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();