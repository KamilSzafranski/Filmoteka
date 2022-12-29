import { getMovies } from "./JS/api";
import { createTemplateGallery } from "./JS/main";
import "./JS/darkmode";
import "./JS/library";
createTemplateGallery(20);
getMovies();

import { scrollFunction } from "./JS/topBtn";
window.onscroll = function () {
  scrollFunction();
};