import { initializeApp } from "firebase/app";
// import { getPopularMovie } from "./main";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Notiflix from "notiflix";

const googleAuthBtn = document.querySelector("#google");
const googleAuthDiv = document.querySelector("#google-box-id");
export const KEY = "UserData";

googleAuthBtn.addEventListener("click", onGoogleAuthBtnClick);
checkUserData();

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGbNYi5d9e9pvrJbAjZENOCCsNPjfk-pc",
  authDomain: "peerless-aria-371813.firebaseapp.com",
  projectId: "peerless-aria-371813",
  storageBucket: "peerless-aria-371813.appspot.com",
  messagingSenderId: "790168712764",
  appId: "1:790168712764:web:41df07adf6f293882ab539",
  measurementId: "G-LS4BN5KJ3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function onGoogleAuthBtnClick() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...

      if (user.emailVerified) {
        const userAuthData = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        setUser(KEY, userAuthData);
        googleAuthBtn.classList.add("button-hidden");
        googleAuthDiv.classList.add("google-box");
        markupUserAuth(user);
        const logoutBtn = document.querySelector(".google-btn--logout");
        logoutBtn.addEventListener("click", logoutClick);
      }
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function markupUserAuth({ displayName, email, photoURL }) {
  googleAuthDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="js-box-out">
   <img class='google-userpic' src=${photoURL} width='30' height='30'>
   <div class='userdata-box'>
      <p class="google-username">${displayName}</p>
      <p class="google-email">${email}</p><button type="button" id="google" class="google-btn--logout"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="logout-svg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg></button>
   </div>
   
   </div>`
  );
}

export function setUser(KEY, data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getUser(KEY) {
  return JSON.parse(localStorage.getItem(KEY));
}

function logoutClick() {
  localStorage.removeItem(KEY);
  googleAuthDiv.classList.remove("google-box");
  document.querySelector(".js-box-out").remove();
  googleAuthBtn.classList.remove("button-hidden");
  //   getPopularMovie();
  Notiflix.Notify.info("You are now logged out.");
}

function checkUserData() {
  const dataUser = getUser(KEY);

  if (dataUser) {
    googleAuthBtn.classList.add("button-hidden");
    googleAuthDiv.classList.add("google-box");
    markupUserAuth(dataUser);
    const logoutBtn = document.querySelector(".google-btn--logout");
    logoutBtn.addEventListener("click", logoutClick);
  }
}
