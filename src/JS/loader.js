const loaderContainer = document.querySelector(".loader-container");
const markupLoader = `<span class="loader"></span>`;

export function renderLoader() {
  loaderContainer.style.display = "flex";
  loaderContainer.innerHTML = markupLoader;
}
