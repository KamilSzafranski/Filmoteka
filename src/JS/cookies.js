const COOKIES_BTN = document.querySelector("#cookies-btn");
const COOKIES = document.querySelector("#cookies");

const setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = `expires= ${date.toUTCString()}`;
  document.cookie = `${cName}=${cValue}; ${expires}; path=/ `;
};

const getCookie = name => {
  if (document.cookie !== "") {
    const cookies = document.cookie.split(/; */);

    for (let cookie of cookies) {
      const [cookieName, cookieVal] = cookie.split("=");
      if (cookieName === decodeURIComponent(name)) {
        return decodeURIComponent(cookieVal);
      }
    }
  }

  return undefined;
};

/* cookieMsg = () => {
    if(!getCookie('cookie'))
    COOKIES.style.display = "block";
} */

COOKIES_BTN.addEventListener("click", () => {
  COOKIES.style.display = "none";
  setCookie("cookie", true, 30);
});

export { getCookie, COOKIES };
