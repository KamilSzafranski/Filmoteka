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
    console.log(dataCategory);
    console.log(dataMovie);

    [...galleryGrid.children].forEach((element, index) => {
      const listDescendant = element.querySelectorAll("*");
      [...listDescendant].forEach(listElement => {
        const markup = `<img class="MainPage__Img skeleton" alt="Poster of movie:${
          dataMovie[index].title || dataMovie[index].name
        }"  src="https://image.tmdb.org/t/p/w500${
          dataMovie[index].poster_path
        }" data-id="${dataMovie[index].id}"/>`;
        if (listElement.classList.contains("MainPage__Img")) {
          listElement.remove();
        }
        if (listElement.classList.contains("ImgWrapper")) {
          listElement.firstElementChild.insertAdjacentHTML(
            "beforebegin",
            markup
          );
        }
        if (listElement.classList.contains("MainPage__PhotoTitle")) {
          listElement.classList.remove("skeleton__text");
          listElement.textContent =
            dataMovie[index].title || dataMovie[index].name;
        }

        if (listElement.classList.contains("MainPage__PhotoType")) {
          listElement.classList.remove("skeleton__text");
          listElement.after("|");

          const movieCategory = dataMovie[index].genre_ids
            .flatMap(e => {
              return dataCategory.flatMap(el => (e === el.id ? el.name : []));
            })
            .join(", ");
          listElement.textContent = `${
            movieCategory === "" ? "No Type" : movieCategory
          }`;
        }

        if (listElement.classList.contains("MainPage__PhotoYear")) {
          listElement.classList.remove("skeleton__text");

          listElement.textContent = (
            dataMovie[index].release_date || dataMovie[index].first_air_date
          ).substring(0, 4);
        }
      });
    });
  } catch (error) {
    console.error(error.message);
  }
};
