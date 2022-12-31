const BODY = document.querySelector("body");
const TOGGLE = document.querySelector(".darkmode-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  BODY.classList.add("dark");
  TOGGLE.classList.add("active");
}

TOGGLE.addEventListener("click", () => {
  BODY.classList.toggle("dark");

  if (!BODY.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

TOGGLE.addEventListener("click", () => TOGGLE.classList.toggle("active"));
