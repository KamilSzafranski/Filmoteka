const markupLoader = `<span class="loader">""</span>`;

export function renderLoader(elementForLoader) {
  elementForLoader.innerHTML = markupLoader;
}
