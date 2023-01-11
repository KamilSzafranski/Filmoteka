const OPEN_MODAL_TEAM = document.querySelector(`[data-team="open"]`);
const CLOSE_MODAL_TEAM = document.querySelector(`[data-team=close]`);
const MODAL_TEAM = document.querySelector(`[data-team="modal"]`);

OPEN_MODAL_TEAM.addEventListener("click", toggleModal);
CLOSE_MODAL_TEAM.addEventListener("click", toggleModal);

export function toggleModal() {
  MODAL_TEAM.classList.toggle("is-hidden");

  if (!MODAL_TEAM.classList.contains("is-hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

window.onclick = function (event) {
  if (event.target == MODAL_TEAM) {
    MODAL_TEAM.classList.toggle("is-hidden");
  }
};
