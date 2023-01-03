const MOVIE_KEY = "watch";

const getMovie = () => {
  const defaultValue = [];

  try {
    const localMovie = JSON.parse(localStorage.getItem(MOVIE_KEY));
    if (localMovie) {
      return localMovie;
    }

    localStorage.setItem(MOVIE_KEY, JSON.stringify(defaultValue));
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

const addMovie = movie => {
  try {
    const movies = getMovie();
    movies.push(movie);

    localStorage.setItem(MOVIE_KEY, JSON.stringify(movies));
  } catch (error) {
    console.error(error);
  }
};

const removeMovie = movie => {
  try {
    const movies = getMovie();
    const updatedMovie = movies.filter(n => n !== note);

    localStorage.setItem(MOVIE_KEY, JSON.stringify(updatedMovie));
  } catch (error) {
    console.error(error);
  }
};

export { MOVIE_KEY, getMovie, addMovie, removeMovie };
