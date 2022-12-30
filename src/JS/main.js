const GALLERY = document.querySelector("ul.MainPage__Grid");
const GALLERY_TEMPLATE = document.querySelector("template.GalleryTemplate");
const NUMBEF_OF_PHOTO = 20;
const API_KEY = "40ed737db1bcf2c75f234fa073fa8cf6";
const galleryGrid = document.querySelector("ul.MainPage__Grid");

const createTemplateGallery = number => {
  for (let i = 0; i < number; i++) {
    GALLERY.append(GALLERY_TEMPLATE.content.cloneNode(true));
  }
};
const displayMovie = (dataMovie, dataCategory) => {
  [...galleryGrid.children].forEach((element, index) => {
    let {
      title,
      name,
      poster_path: poster,
      id,
      genre_ids: genreID,
      release_date: releaseDate,
      first_air_date: firstAirDate,
    } = dataMovie[index];
    let movieCategory;

    const markup = `<img class="MainPage__Img skeleton" alt="Poster of movie:${
      title || name
    }"  src="https://image.tmdb.org/t/p/w500${poster}" data-id="${id}"/>`;

    const listDescendant = element.querySelectorAll("*");

    [...listDescendant].forEach(listElement => {
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
          return dataCategory.flatMap(categoryElement =>
            dataMovieGenreID === categoryElement.id ? categoryElement.name : []
          );
        });
        if (movieAllCategory.length >= 4) {
          console.log(movieAllCategory);
          movieCategory = movieAllCategory.slice(0, 3).join(", ") + "...";
        } else {
          movieCategory = movieAllCategory.join(", ");
        }

        listElement.textContent = `${
          movieCategory === "" ? "No Type yet" : movieCategory
        }`;
      }

      if (listElement.classList.contains("MainPage__PhotoYear")) {
        listElement.classList.remove("skeleton__text");

        listElement.textContent = (releaseDate || firstAirDate).substring(0, 4);
      }
    });
  });
};

export const getPopularMovie = async () => {
  try {
    createTemplateGallery(20);
    const getMovie = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    );
    const responseMovie = await getMovie.json();
    const dataMovie = responseMovie.results;

    const getMovieCategory = await fetch(
      `
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const responseCategory = await getMovieCategory.json();
    const dataCategory = responseCategory.genres;

    displayMovie(dataMovie, dataCategory);
  } catch (error) {
    console.error(error.message);
  }
};
