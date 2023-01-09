
const OPEN_MODAL_TEAM = document.querySelector("[team-modal-open]");
const CLOSE_MODAL_TEAM= document.querySelector("[team-modal-close]");
const MODAL_TEAM = document.querySelector("[team-modal]");
const BODY = document.querySelector("[body]")

  
OPEN_MODAL_TEAM.addEventListener("click", toggleModal);
CLOSE_MODAL_TEAM.addEventListener("click", toggleModal);
  
export function toggleModal() {
    MODAL_TEAM.classList.toggle("is-hidden");

    if (!MODAL_TEAM.classList.contains("is-hidden")) {
        BODY.style.overflow = "hidden"
    } else {
        BODY.style.overflow = "auto"
    }

}


window.onclick = function(event) {
    if (event.target == MODAL_TEAM) {
        MODAL_TEAM.classList.toggle("is-hidden");
    }
  }
