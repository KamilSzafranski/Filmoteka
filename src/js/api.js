//Klucz API (v3 auth)
//40ed737db1bcf2c75f234fa073fa8cf6

//Przykład zapytania:
//https://api.themoviedb.org/3/movie/550?api_key=40ed737db1bcf2c75f234fa073fa8cf6

import axios from "axios";

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '40ed737db1bcf2c75f234fa073fa8cf6';

export async function getMovies(page = 1) {
    const url = `${MAIN_URL}/movie/550?api_key=${API_KEY}`;
    return await axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  }