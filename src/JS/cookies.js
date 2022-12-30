const COOKIES_BTN = document.querySelector("#cookies-btn");
const COOKIES = document.querySelector("#cookies");

const setCookie = (cName, cValue, expDays) => {
  console.log("clicked");
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = `expires= ${date.toUTCString()}`;
  document.cookie = `${cName}=${cValue}; ${expires}; path=/ `;
};

const getCookie = cName => {
  const name = `cName=`;
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split(";");
  let value;

  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });
  return value;
};

/* cookieMsg = () => {
    if(!getCookie('cookie'))
    COOKIES.style.display = "block";
} */

COOKIES_BTN.addEventListener("click", () => {
  COOKIES.style.display = "none";
  setCookie("cookie", true, 30);
});
