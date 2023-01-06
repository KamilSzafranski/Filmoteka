import image from "../images/nocover.png";
import { openmodal } from "./modals";
import { getMovie } from "./storage";

const GALLERY = document.querySelector("ul.MainPage__Grid");
const GALLERY_TEMPLATE = document.querySelector("template.GalleryTemplate");
const NUMBEF_OF_PHOTO = 20;
const API_KEY = "40ed737db1bcf2c75f234fa073fa8cf6";
const galleryGrid = document.querySelector("ul.MainPage__Grid");
const SEARCH_INPUT = document.querySelector("input.header__input");
const SEARCH_BTN = document.querySelector("button.header__submit");
const PAGINATION_CONTAINER = document.querySelector("div.Pagination");
const PAGINATION_CONTAINER_GRID = document.querySelector(
  "div.Pagination__containerGrid"
);
const PAGINATION_GRID = document.querySelector("ul.Pagination__grid");

let searchMovieOption = {
  api_key: API_KEY,
  language: "en-US",
};

let totalResults;
let totalPages;
let currentPage = 1;
let results;
let currentLibraryPage = 1;

let firstItem = document.querySelector("div[data-add='first']");
let lastItem = document.querySelector("div[data-add='last']");

const createTemplateGallery = number => {
  for (let i = 0; i < number; i++) {
    GALLERY.append(GALLERY_TEMPLATE.content.cloneNode(true));
  }
};

const createPaginationList = numberOfPage => {
  PAGINATION_GRID.innerHTML = "";
  PAGINATION_CONTAINER.style.display = "flex";
  const paginationGridFragment = document.createDocumentFragment();
  for (let k = 0; k < numberOfPage; k++) {
    const paginationGridItem = document.createElement("li");
    paginationGridItem.classList.add("Pagination__item");
    paginationGridItem.textContent = k + 1;
    paginationGridFragment.append(paginationGridItem);
  }

  PAGINATION_GRID.append(paginationGridFragment);

  let pagiantionItemActived = document.querySelector(
    `.Pagination__item:nth-child(${currentPage})`
  );
  pagiantionItemActived.classList.add("Pagination__item--active");

  if (totalPages < 5) {
    PAGINATION_CONTAINER_GRID.style.width = `${
      totalPages * 14 + (totalPages - 1) * 16 + 26
    }px`;
    move(0);
  } else {
    PAGINATION_CONTAINER_GRID.style.width = "160px";
    lastItem.textContent = totalPages;
    lastItem.style.visibility = "visible";
    lastItem.previousElementSibling.style.visibility = "visible";
    lastItem.style.opacity = "1";
    lastItem.previousElementSibling.style.opacity = "1";
    PAGINATION_CONTAINER.lastElementChild.style.transform = `translateX(0px)`;
  }

  if (totalPages - currentPage <= 2) {
    lastItem.style.visibility = "hidden";
    lastItem.previousElementSibling.style.visibility = "hidden";
    lastItem.style.opacity = "0";
    lastItem.previousElementSibling.style.opacity = "0";
    PAGINATION_CONTAINER.lastElementChild.style.transform = `translateX(-60px)`;
  }
  if (currentPage > 3) {
    console.log("e");
    PAGINATION_CONTAINER.firstElementChild.style.transform = `translateX(0px)`;
    firstItem.style.visibility = "visible";
    firstItem.nextElementSibling.style.visibility = "visible";
    firstItem.style.opacity = "1";
    firstItem.nextElementSibling.style.opacity = "1";
  } else {
    firstItem.style.visibility = "hidden";
    firstItem.nextElementSibling.style.visibility = "hidden";
    firstItem.style.opacity = "0";
    firstItem.nextElementSibling.style.opacity = "0";
    PAGINATION_CONTAINER.firstElementChild.style.transform = `translateX(60px)`;
  }
  if (currentPage === 1) {
    PAGINATION_CONTAINER.firstElementChild.style.visibility = "hidden";
    PAGINATION_CONTAINER.firstElementChild.style.opacity = "0";
  } else {
    PAGINATION_CONTAINER.firstElementChild.style.visibility = "visible";
    PAGINATION_CONTAINER.firstElementChild.style.opacity = "1";
    console.log(PAGINATION_CONTAINER.firstElementChild);
  }
  if (currentPage === totalPages) {
    PAGINATION_CONTAINER.lastElementChild.style.visibility = "hidden";
    PAGINATION_CONTAINER.lastElementChild.style.opacity = "0";
  } else {
    PAGINATION_CONTAINER.lastElementChild.style.visibility = "visible";
    PAGINATION_CONTAINER.lastElementChild.style.opacity = "1";
  }
};
const displayMovie = (Movie, Category, type = "normal") => {
  [...galleryGrid.children].forEach((element, index) => {
    let {
      title,
      name,
      poster_path,
      id,
      genre_ids: genreID,
      release_date: releaseDate,
      first_air_date: firstAirDate,
    } = Movie[index];
    let movieCategory;

    let poster =
      poster_path === null
        ? image
        : `https://image.tmdb.org/t/p/w500${poster_path}`;

    const markup = `<img class="MainPage__Img skeleton" alt="Poster of movie:${
      name || title
    }"  src="${poster}" data-id="${id}"/>`;

    const listDescendant = [...element.querySelectorAll("*")].forEach(
      listElement => {
        if (listElement.classList.contains("MainPage__Img")) {
          listElement.remove();
        }
        if (listElement.classList.contains("ImgWrapper")) {
          listElement.insertAdjacentHTML("beforeend", markup);
        }
        if (listElement.classList.contains("MainPage__PhotoTitle")) {
          listElement.classList.remove("skeleton__text");
          listElement.textContent = title || name;
        }

        if (listElement.classList.contains("MainPage__PhotoType")) {
          listElement.classList.remove("skeleton__text");
          listElement.after("|");

          if (type === "normal") {
            const movieAllCategory = genreID.flatMap(dataMovieGenreID => {
              return Category.flatMap(categoryElement =>
                dataMovieGenreID === categoryElement.id
                  ? categoryElement.name
                  : []
              );
            });

            if (movieAllCategory.length >= 4) {
              movieCategory =
                movieAllCategory.slice(0, 3).join(", ") + " " + "...";
            } else {
              movieCategory = movieAllCategory.join(", ");
            }
          }

          listElement.textContent = `${
            movieCategory === "" ? "No type in database" : movieCategory
          }`;
          if (type === "library") {
            console.log(Movie[index]);
            const movieLibraryCategory = Movie[index].genres
              .map(e => e.name)
              .join(", ");
            listElement.textContent = `${
              movieLibraryCategory === ""
                ? "No type in database"
                : movieLibraryCategory
            }`;
          }
        }

        if (listElement.classList.contains("MainPage__PhotoYear")) {
          listElement.classList.remove("skeleton__text");

          let dateToWrite =
            (releaseDate || firstAirDate) ?? "No data in database";

          if (dateToWrite === "No data in database") {
            return (listElement.textContent = dateToWrite);
          }

          listElement.textContent = dateToWrite.slice(0, 4);
        }
      }
    );
  });
};

const getLibraryMovie = async (type, count = "first") => {
  try {
    if (count === "first") {
      currentPage = 1;
    }

    GALLERY.innerHTML = "";

    createTemplateGallery(NUMBEF_OF_PHOTO);
    let libraryMovie;
    if (type === "watch") {
      libraryMovie = getMovie(type);
    }

    if (type === "queue") {
      libraryMovie = getMovie(type);
    }

    totalResults = libraryMovie.length;
    totalPages = Math.ceil(libraryMovie.length / 20);

    results = libraryMovie.length;

    console.log(results);
    if (results < 20) {
      const removeRemainingSkeleton = [...GALLERY.children].forEach(
        (remainingElement, remainingIndex) => {
          if (remainingIndex >= results) remainingElement.remove();
        }
      );
    }

    const getSearchMovieCategory = await fetch(
      `
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const responseSearchCategory = await getSearchMovieCategory.json();
    const dataSearchCategory = responseSearchCategory.genres;

    displayMovie(libraryMovie, dataSearchCategory, "library");

    createPaginationList(totalPages);
    if (count === "first") {
      PAGINATION_GRID.style.transform = `translateX(0px)`;
    }
  } catch (error) {
    console.error(error.message, error.code);
  }
};

const getPopularMovie = async () => {
  try {
    createTemplateGallery(NUMBEF_OF_PHOTO);
    const getPopularMovie = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    );
    const responsePopularMovie = await getPopularMovie.json();
    const dataPopularMovie = responsePopularMovie.results;

    const getPopularMovieCategory = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const responsePopularCategory = await getPopularMovieCategory.json();
    const dataPopularCategory = responsePopularCategory.genres;

    displayMovie(dataPopularMovie, dataPopularCategory);
    galleryGrid.addEventListener("click", openmodal);
  } catch (error) {
    console.error(error.message);
  }
};

const getSearchMovie = async (event, count = "first") => {
  try {
    if (count === "first") {
      currentPage = 1;
    }
    event.preventDefault();
    GALLERY.innerHTML = "";
    searchMovieOption.query = SEARCH_INPUT.value.trim();
    searchMovieOption.page = currentPage;
    event.currentTarget.blur();
    const params = new URLSearchParams(searchMovieOption);
    if (searchMovieOption.query === "") {
      return console.log("BRAK DANYCH W INPUCIE");
    }

    createTemplateGallery(NUMBEF_OF_PHOTO);

    const getSearchMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}`
    );
    const responseSearchMovie = await getSearchMovie.json();

    totalPages = responseSearchMovie.total_pages;
    totalResults = responseSearchMovie.total_results;
    results = responseSearchMovie.results.length;

    if (results < 20) {
      const removeRemainingSkeleton = [...GALLERY.children].forEach(
        (remainingElement, remainingIndex) => {
          if (remainingIndex >= results) remainingElement.remove();
        }
      );
    }
    const dataSearchMovie = responseSearchMovie.results;

    const getSearchMovieCategory = await fetch(
      `
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const responseSearchCategory = await getSearchMovieCategory.json();
    const dataSearchCategory = responseSearchCategory.genres;

    displayMovie(dataSearchMovie, dataSearchCategory);

    createPaginationList(totalPages);
    if (count === "first") {
      PAGINATION_GRID.style.transform = `translateX(0px)`;
    }
  } catch (error) {
    console.error(error.message, error.code);
  }
};

const pagination = event => {
  const {
    nodeName,
    textContent,
    dataset: { page },
  } = event.target;
  event.preventDefault();

  let gridTranslateX =
    PAGINATION_GRID.computedStyleMap().get("transform")[0].x.value;

  if (page === "next") {
    currentPage++;
    getSearchMovie(event, "second");
  }
  if (page == "previous") {
    currentPage--;
    getSearchMovie(event, "second");
  }

  if (page === "next" && currentPage > 3) {
    gridTranslateX -= 30;
    move(gridTranslateX);
  }
  if (page === "previous" && currentPage >= 3) {
    gridTranslateX += 30;
    move(gridTranslateX);
  }

  if (totalPages - currentPage <= 2 && page === "next") {
    gridTranslateX = -(totalPages - 5) * 30;
    move(gridTranslateX);
  }
  if (totalPages - currentPage < 2 && page == "previous") {
    {
      gridTranslateX = -(totalPages - 5) * 30;
      move(gridTranslateX);
    }
  }
  if (nodeName === "LI") {
    currentPage = Number(textContent);

    if (Number(textContent) > 3 && currentPage >= 3) {
      if (!(totalPages - Number(textContent)) < 3) {
        gridTranslateX = -(Number(textContent) - 3) * 30;
        move(gridTranslateX);
      }
    }

    if (Number(textContent) <= 3 && currentPage >= 3) {
      gridTranslateX += (3 - Number(textContent)) * 30;
      move(gridTranslateX);
      console.log("e");
    }

    if (Number(textContent) <= 3) {
      gridTranslateX = 0;
      move(gridTranslateX);
    }
    if (totalPages - Number(textContent) < 3) {
      gridTranslateX = -(totalPages - 5) * 30;
      move(gridTranslateX);
    }

    getSearchMovie(event, "second");
  }

  if (event.target === firstItem) {
    gridTranslateX = 0;
    move(gridTranslateX);
    currentPage = 1;
    getSearchMovie(event, "second");
  }

  if (event.target === lastItem) {
    gridTranslateX = -(totalPages - 5) * 30;
    move(gridTranslateX);
    currentPage = totalPages;
    getSearchMovie(event, "second");
  }

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
};

export {
  getPopularMovie,
  getSearchMovie,
  pagination,
  SEARCH_BTN,
  PAGINATION_CONTAINER,
  API_KEY,
  galleryGrid,
  getLibraryMovie,
};

const move = value => {
  PAGINATION_GRID.style.transform = `translateX(${value}px)`;
};
