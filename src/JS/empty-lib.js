const LIBRARY_BTN = document.getElementById('library')
const WATCHED_BTN = document.getElementById('btn-watched')
const QUEUE_BTN = document.getElementById('btn-queue')
const EMPTY_LIBRARY = document.getElementById('library__empty')
const EMPTY_WATCHED = document.getElementById('watched__empty')
const EMPTY_QUEUE = document.getElementById('queue__empty')
const MAIN_PAGE = document.getElementById('MainPage')
const STORED_WATCH = localStorage.getItem("watch");
const STORED_QUEUE = localStorage.getItem("queue");


const emptyLibrary = () => {

   if (STORED_WATCH === null || STORED_QUEUE == null ) {
        LIBRARY_EMPTY.classList.remove("visually-hidden");
        MAIN_PAGE.classList.add("visually-hidden")
    }
}

/* const emptyWatched = () => {

    if (STORED_WATCH === null) {
         EMPTY_WATCHED.classList.remove("visually-hidden");
         MAIN_PAGE.classList.add("visually-hidden")
     }
 }

 const emptyQueue = () => {

    if (STORED_QUEUE === null) {
         EMPTY_QUEUE.classList.remove("visually-hidden");
         MAIN_PAGE.classList.add("visually-hidden")
     }
 } 
  */

LIBRARY_BTN.addEventListener('click', emptyLibrary)
/* WATCHED_BTN.addEventListener('click', emptyWatched)
QUEUE_BTN.addEventListener('click', emptyQueue) */


