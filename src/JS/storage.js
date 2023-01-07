import Notiflix from "notiflix";
const getMovie = movieKey => {
  const defaultValue = [];

  try {
    const localMovie = JSON.parse(localStorage.getItem(movieKey));
    if (localMovie) {
      return localMovie;
    }

    localStorage.setItem(movieKey, JSON.stringify(defaultValue));
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

const addMovie = (movieKey, movie) => {
  try {
    const movies = getMovie(movieKey);

    if (movie.success === false) {
      return Notiflix.Notify.error(
        "Sorry, Somthing get wrong. Plese try again"
      );
    }
    if (movies.some(element => element.id === movie.id)) {
      if (movieKey === "watch") {
        Notiflix.Notify.info("You alredy have this movie in watch list");
      }
      if (movieKey === "queue") {
        Notiflix.Notify.info("You alredy have this movie in queues");
      }
      return;
    }

    movies.push(movie);

    localStorage.setItem(movieKey, JSON.stringify(movies));
  } catch (error) {
    console.error(error);
    if (movieKey !== "all") {
      Notiflix.Notify.warning("Sorry, Somthing get wrong. Plese try again");
    }
  }
};
const removeMovie = (movieKey, movie) => {
  try {
    const movies = getMovie(movieKey);
    const updatedMovie = movies.filter(n => n !== note);

    localStorage.setItem(movieKey, JSON.stringify(updatedMovie));
  } catch (error) {
    console.error(error);
  }
};

export { getMovie, addMovie, removeMovie };
