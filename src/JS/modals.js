import { galleryGrid, API_KEY } from "./main";
import { addMovie } from "./storage";

const modal = document.querySelector(".modal-backdrop");

const modalImage = document.querySelector(".film-modal-poster-img");
const modalTitle = document.querySelector(".film-modal-title");
const modalVote = document.querySelector(".film-modal-item-vote");
const modalVotes = document.querySelector(".film-modal-item-votes");
const modalPopularity = document.querySelector(".film-modal-item-popularity");
const modalOriginalTitle = document.querySelector(
  ".film-modal-item-original-title"
);
const modalGenre = document.querySelector(".film-modal-item-genre");
const modalAbout = document.querySelector(".film-modal-description");

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

const closeModal = event => {
  const {
    dataset: { type },
  } = event.target;

  if (event.key === "Escape") {
    modal.classList.add("is-hidden");
    modal.removeEventListener("click", modalListner);
    window.removeEventListener("keydown", modalListner);
    galleryGrid.addEventListener("click", openmodal);
  }
};
const openmodal = async event => {
  try {
    event.preventDefault();
    const {
      nodeName,
      dataset: { id },
    } = event.target;
    const modal = document.querySelector(".modal-backdrop");
    if (nodeName !== "IMG") return;

    modal.classList.remove("is-hidden");
    galleryGrid.removeEventListener("click", openmodal);

    modal.addEventListener("click", modalListner);
    window.addEventListener("keydown", closeModal);

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.json();

    modalTitle.textContent = data.title;
    modalAbout.textContent = data.overview;
    modalImage.src = event.target.src;
    modalVote.textContent = data.vote_average;
    modalVotes.textContent = data.vote_count;
    modalPopularity.textContent = data.popularity;
    modalOriginalTitle.textContent = data.original_title;

    const movieGenres = data.genres.map(function (item) {
      return item["name"];
    });
    modalGenre.textContent = movieGenres.join(", ");

    movie = [];
    movie.push(data);

    modal.addEventListener("click", modalListner);
    window.addEventListener("keydown", closeModal);
  } catch (error) {
    console.error(error);
  }
};

export { openmodal };
