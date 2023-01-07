const BODY = document.querySelector("body");
const FOOTER = document.querySelector(".footer");
const TOGGLE = document.querySelector(".darkmode-toggle");
const MODAL = document.querySelector(".film-modal")
const PAGINATION = document.querySelector(".Pagination")

let getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark") {
  BODY.classList.add("dark");
  FOOTER.classList.add("dark");
  MODAL.classList.add("dark");
  PAGINATION.classList.add("dark");
  TOGGLE.classList.add("active");
}

TOGGLE.addEventListener("click", () => {
  BODY.classList.toggle("dark");
  FOOTER.classList.toggle("dark");
  MODAL.classList.add("dark");
  PAGINATION.classList.add("dark");

  if (!BODY.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

TOGGLE.addEventListener("click", () => TOGGLE.classList.toggle("active"));
