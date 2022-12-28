import { getMovies } from "./JS/api";
import { createTemplateGallery } from "./JS/main";
createTemplateGallery(20);
getMovies();

import { scrollFunction } from "./JS/topBtn";
window.onscroll = function () {
  scrollFunction();
};