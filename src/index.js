import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import { getPopularMovie, getSearchMovie } from "./JS/main";
import { renderLoader } from "./JS/loader";

getPopularMovie();

window.onscroll = function () {
  scrollFunction();
};

import "./JS/cookies";
