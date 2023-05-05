(() => {
  const refs = {
    openModalBtn: document.querySelector('[mob-menu-open]'),
    closeModalBtn: document.querySelector('[mob-menu-close]'),
    modal: document.querySelector('[modal-mob-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-rolled');
  }
})();
