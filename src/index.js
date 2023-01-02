import "./JS/cookies";
import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import "./JS/firebase";
import { getPopularMovie } from "./JS/main";
import { renderLoader } from "./JS/loader";

getPopularMovie();

window.onscroll = function () {
  scrollFunction();
};

import "./JS/cookies";
import "./JS/team-modal";
