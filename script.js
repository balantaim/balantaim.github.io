//Toggle Day/Night mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
    //1. add the class darkMode to the body
    document.body.classList.add("darkmode");
    //2. update darkmode in the local storage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
        //1. add the class darkMode to the body
        document.body.classList.remove("darkmode");
        //2. update darkmode in the local storage
        localStorage.setItem("darkMode", null);
};

if(darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

//Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile');
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});

//Disable copy and paste with allert dialog
const copyOverplay = document.querySelector('.copy-overplay');
const protectAlert = document.querySelector('.protect-alert');
const confirmAlert = document.querySelector('.confirmAlert');

window.addEventListener('copy', (e)=>{
    e.preventDefault();
    copyOverplay.style.display = "block";
    protectAlert.style.display = "block";
});
confirmAlert.addEventListener('click', ()=>{
    copyOverplay.style.display = "none";
    protectAlert.style.display = "none";
});