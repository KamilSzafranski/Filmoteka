"use strict";
import Notiflix from "notiflix";
import "./JS/cookies";
import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import {
  getPopularMovie,
  getSearchMovie,
  pagination,
  SEARCH_BTN,
  PAGINATION_CONTAINER,
} from "./JS/main";
import { renderLoader } from "./JS/loader";
import { MOVIE_KEY, getMovie, addMovie, removeMovie } from "./JS/storage";
Notiflix.Notify.init({
  clickToClose: true,
  timeout: 1000,
  position: "center-top",
  info: {
    background: "#ff6b08",
  },
  warning: {
    background: "#fc036b",
  },
  success: {
    background: "#34ebb1",
  },
});

window.onscroll = function () {
  scrollFunction();
};

getPopularMovie();
SEARCH_BTN.addEventListener("click", getSearchMovie);
PAGINATION_CONTAINER.addEventListener("click", pagination);

import { toggleModal } from "./JS/team-modal";

import "./JS/firebase";
import "./JS/modals";
import Notiflix from "notiflix";
