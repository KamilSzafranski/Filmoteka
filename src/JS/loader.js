const loaderContainer = document.querySelector(".loader-container");
const markupLoader = `<span class="loader"></span>`;

export function renderLoader(type) {
  if (type === "start") {
    loaderContainer.style.display = "flex";
    loaderContainer.innerHTML = markupLoader;
  }
  if (type === "stop") {
    loaderContainer.style.display = "none";
    loaderContainer.innerHTML = "";
  }
}
