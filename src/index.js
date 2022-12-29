import { getMovies } from "./JS/api";
import { createTemplateGallery } from "./JS/main";
import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
createTemplateGallery(20);
getMovies();


window.onscroll = function () {
  scrollFunction();
};