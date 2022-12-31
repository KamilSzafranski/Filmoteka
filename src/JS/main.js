const GALLERY = document.querySelector("ul.MainPage__Grid");
const GALLERY_TEMPLATE = document.querySelector("template.GalleryTemplate");
const NUMBEF_OF_PHOTO = 20;
const API_KEY = "40ed737db1bcf2c75f234fa073fa8cf6";
const galleryGrid = document.querySelector("ul.MainPage__Grid");
const SEARCH_INPUT = document.querySelector("input.header__input");
const SEARCH_BTN = document.querySelector("button.header__submit");
const NO_POSTER = "https://picsum.photos/id/870/200/300?grayscale&blur=2";

let searchMovieOption = {
  api_key: API_KEY,
  language: "en-US",
  page: 1,
};

let totalPages;
let totalResults;
let currentPage;

const createTemplateGallery = number => {
  for (let i = 0; i < number; i++) {
    GALLERY.append(GALLERY_TEMPLATE.content.cloneNode(true));
  }
};
const displayMovie = (Movie, Category) => {
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
        ? "https://i.ibb.co/R9jK8kt/nocover.jpg"
        : `https://image.tmdb.org/t/p/w500${poster_path}`;

    const markup = `<img class="MainPage__Img skeleton" alt="Poster of movie:${
      title || name
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

          listElement.textContent = `${
            movieCategory === "" ? "No type in database" : movieCategory
          }`;
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

const getPopularMovie = async () => {
  try {
    createTemplateGallery(NUMBEF_OF_PHOTO);
    const getPopularMovie = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    );
    const responsePopularMovie = await getPopularMovie.json();
    const dataPopularMovie = responsePopularMovie.results;

    const getPopularMovieCategory = await fetch(
      `
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const responsePopularCategory = await getPopularMovieCategory.json();
    const dataPopularCategory = responsePopularCategory.genres;

    displayMovie(dataPopularMovie, dataPopularCategory);
  } catch (error) {
    console.error(error.message);
  }
};

const getSearchMovie = async event => {
  try {
    GALLERY.innerHTML = "";
    event.preventDefault();
    searchMovieOption.query = SEARCH_INPUT.value.trim();
    event.currentTarget.blur();
    const params = new URLSearchParams(searchMovieOption);
    if (SEARCH_INPUT.value.trim() === "") {
      return console.log("BRAK DANYCH W INPUCIE");
    }

    createTemplateGallery(NUMBEF_OF_PHOTO);

    const getSearchMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}`
    );
    const responseSearchMovie = await getSearchMovie.json();

    totalPages = responseSearchMovie.total_pages;
    totalResults = responseSearchMovie.total_results;

    if (totalResults < 20) {
      const removeRemainingSkeleton = [...GALLERY.children].forEach(
        (remainingElement, remainingIndex) => {
          if (remainingIndex >= totalResults) remainingElement.remove();
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
    SEARCH_INPUT.value = "";
  } catch (error) {
    console.error(error.message, error.code);
  }
};

export { getPopularMovie, getSearchMovie, SEARCH_BTN };
