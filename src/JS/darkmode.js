const BODY = document.querySelector("body");
const FOOTER = document.querySelector(".footer");
const TOGGLE = document.querySelector(".darkmode-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  BODY.classList.add("dark");
  FOOTER.classList.add("dark");
  TOGGLE.classList.add("active");
}

TOGGLE.addEventListener("click", () => {
  BODY.classList.toggle("dark");
  FOOTER.classList.toggle("dark");

  if (!BODY.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

TOGGLE.addEventListener("click", () => TOGGLE.classList.toggle("active"));
