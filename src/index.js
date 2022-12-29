import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import { getPopularMovie } from "./JS/main";
import "./JS/loader";

getPopularMovie();

window.onscroll = function () {
  scrollFunction();
};
