import { galleryGrid, API_KEY } from "./main";
import { addMovie } from "./storage";
const modal = document.querySelector(".temporaryModa");
let movie = [];

const modalListner = event => {
  console.log(movie);
  event.preventDefault();
  const {
    dataset: { type },
  } = event.target;

  if (type === "watch") {
    return addMovie(type, movie[0]);
  }
  if (type === "queue") {
    return addMovie(type, movie[0]);
  }
  if (type === "close") {
    modal.classList.add("is-hidden");
    window.removeEventListener("click", modalListner);
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

  window.addEventListener("click", modalListner);
  window.addEventListener("keydown", modalListner);
};

export { openmodal };
