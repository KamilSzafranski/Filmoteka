import { galleryGrid, API_KEY } from "./main";
import { addMovie } from "./storage";
const modal = document.querySelector(".temporaryModa");
let movie = [];

const modalListner = event => {
  event.preventDefault();
  const {
    dataset: { type },
  } = event.target;

  if (type === "watch") {
    addMovie("all", movie[0]);
    return addMovie(type, movie[0]);
  }
  if (type === "queue") {
    addMovie("all", movie[0]);
    return addMovie(type, movie[0]);
  }
  if (type === "close") {
    modal.classList.add("is-hidden");
    modal.removeEventListener("click", modalListner);
    window.removeEventListener("keydown", closeModal);

    galleryGrid.addEventListener("click", openmodal);
  }
};

closeModal = event => {
  event.preventDefault();
  const {
    dataset: { type },
  } = event.target;

  console.log("e");
  if ((event.code = "Escape")) {
    modal.classList.add("is-hidden");
    modal.removeEventListener("click", modalListner);
    window.removeEventListener("keydown", modalListner);
    galleryGrid.addEventListener("click", openmodal);
  }
};
const openmodal = async event => {
  event.preventDefault();
  const {
    nodeName,
    dataset: { id },
  } = event.target;
  const modal = document.querySelector(".temporaryModa");
  if (nodeName !== "IMG") return;

  modal.classList.remove("is-hidden");
  galleryGrid.removeEventListener("click", openmodal);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();
  movie = [];
  movie.push(data);

  modal.addEventListener("click", modalListner);
  window.addEventListener("keydown", closeModal);
};

export { openmodal };
