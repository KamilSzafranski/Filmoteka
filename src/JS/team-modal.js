
const OPEN_MODAL = document.querySelector("[team-modal-open]");
const CLOSE_MODAL= document.querySelector("[team-modal-close]");
const MODAL = document.querySelector("[team-modal]");

  
OPEN_MODAL.addEventListener("click", toggleModal);
CLOSE_MODAL.addEventListener("click", toggleModal);
  
export function toggleModal() {
    MODAL.classList.toggle("is-hidden");
};