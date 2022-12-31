import { initializeApp } from "firebase/app";
// import { getPopularMovie } from "./main";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
      <p class="google-email">${email}</p>
   </div>
   <div class="">
      <button type="button" id="google" class="google-btn--logout">Log out</button>
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
