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
    console.log(movie);
    if (movie.success === false) {
      return console.log("Nie dodano");
    }
    // if (movies.some(element => element.id === movie.id)) {
    //   return console.log("ALREADY IN STOCK");
    // }

    movies.push(movie);

    localStorage.setItem(movieKey, JSON.stringify(movies));
  } catch (error) {
    console.error(error);
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
