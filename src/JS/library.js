import { getLibraryMovie, galleryGrid } from "./main";
import { checkUserData } from "./firebase";
import { getMovie, removeMovie } from "./storage";
import Notiflix from "notiflix";
const headerSearch = document.querySelector(".js-box");
const library = document.querySelector("#library");
const home = document.querySelector("#home");
const header = document.querySelector(".header");
const searchLabel = document.querySelector(".header__label");
const buttonSearch = document.querySelector(".header__submit");

const KEY = "UserData";
function getUser(KEY) {
  return JSON.parse(localStorage.getItem(KEY));
}
let removeMode;
let libraryType;
let inverseRemoveMode;
const removeButton = document.querySelector(".btnRemove");

const libraryCreation = e => {
  e.preventDefault();
  headerSearch.innerHTML = "";
  headerSearch.innerHTML = `<div class="js-box--padding"><button id="btn-watched" class="btn-watched btn-active" data-library ="watch"type="button">Watched</button>
        <button id="btn-queue" class="btn-queue" data-library ="queue" type="button">Queue</button></div>`;
  library.classList.add("nav-list__link--active");
  home.classList.remove("nav-list__link--active");
  header.classList.add("header--bgc");
  searchLabel.classList.add("button-hidden");
  buttonSearch.classList.add("button-hidden");
  const dataUser = getUser(KEY);
  if (!dataUser) Notiflix.Notify.info("Log in for more features!");

  removeButton.style.display = "block";
  removeButton.disabled = true;
  removeButton.classList.add("btnRemove--disabled");

  getLibraryMovie("all").then(totalResults => {
    totalResults >= 1
      ? Notiflix.Notify.success(`We fount ${totalResults} movie in your library
    To remove movie from you library first select type of library :)`)
      : Notiflix.Notify.warning("Sorry, we found 0 movie");
  });
};

library.addEventListener("click", libraryCreation);

const displayLibraryType = event => {
  const {
    dataset: { library },
  } = event.target;
  libraryType = library;
  if (library !== "queue" && library !== "watch") return;

  if (library === "watch") {
    removeMode = "watch";
    inverseRemoveMode = "queue";
  }
  if (library === "queue") {
    removeMode = "queue";
    inverseRemoveMode = "watch";
  }

  removeButton.style.display = "block";
  removeButton.disabled = false;
  removeButton.classList.remove("btnRemove--disabled");
  getLibraryMovie(library);
};

const removeItem = async e => {
  try {
    e.preventDefault();
    [...galleryGrid.children].forEach(element =>
      element.classList.remove("shake")
    );
    const {
      dataset: { id },
    } = e.target;
    let pageToRender = Number(
      document.querySelector(".Pagination__item--active").textContent
    );

    const movieLeft = [...document.querySelectorAll(".MainPage__Item")];
    if (movieLeft.length === 1 && pageToRender !== 1) {
      pageToRender -= 1;
    }

    const isAnyMovieInInversMode = getMovie(inverseRemoveMode).filter(
      element => element.id === Number(id)
    );
    removeMovie(removeMode, id);
    if (!isAnyMovieInInversMode[0]) {
      removeMovie("all", id);
    }
    getLibraryMovie(removeMode, "second", pageToRender);

    Notiflix.Notify.warning("Remove mode is now deactivate");
    galleryGrid.removeEventListener("click", removeItem);
  } catch (error) {
    console.error(error);
  }
};

const removeActivation = event => {
  event.preventDefault();
  Notiflix.Notify.warning("Remove mode activated");
  [...galleryGrid.children].forEach(element => element.classList.add("shake"));
  galleryGrid.addEventListener("click", removeItem);
};

header.addEventListener("click", displayLibraryType);
removeButton.addEventListener("click", removeActivation);

export { removeButton };
