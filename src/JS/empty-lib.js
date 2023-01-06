const LIBRARY_BTN = document.getElementById('library')
const LIBRARY_EMPTY = document.getElementById('library__empty')
const MAIN_PAGE = document.getElementById('MainPage')


const emptyLibrary = () => {

    const STORED_WATCH = localStorage.getItem("watch");
    const STORED_QUEUE = localStorage.getItem("queue");

   if (STORED_WATCH === null  || STORED_QUEUE == null ) {
        LIBRARY_EMPTY.classList.remove("visually-hidden");
        MAIN_PAGE.classList.add("visually-hidden")
    }
}
 
LIBRARY_BTN.addEventListener('click', emptyLibrary)

