import "./JS/cookies";
import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import { getPopularMovie, getSearchMovie, SEARCH_BTN } from "./JS/main";
import { renderLoader } from "./JS/loader";
import "./JS/cookies";
import "./JS/team-modal";

window.onscroll = function () {
  scrollFunction();
};

getPopularMovie();
SEARCH_BTN.addEventListener("click", getSearchMovie);

