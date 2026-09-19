// //Toggle Day/Night mode
// let darkMode = localStorage.getItem("darkMode");
// const darkModeToggle = document.querySelector("#dark-mode-toggle");
// const darkModeToggle2 = document.querySelector("#dark-mode-toggle2");

// const enableDarkMode = () => {
//     //1. add the class darkMode to the body
//     document.body.classList.add("darkmode");
//     //2. update darkmode in the local storage
//     localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = () => {
//         //1. add the class darkMode to the body
//         document.body.classList.remove("darkmode");
//         //2. update darkmode in the local storage
//         localStorage.setItem("darkMode", null);
// };

// if(darkMode === "enabled"){
//     enableDarkMode();
// }

// darkModeToggle.addEventListener("click", () =>{
//     darkMode = localStorage.getItem("darkMode");
//     if(darkMode !== "enabled"){
//         enableDarkMode();
//     }else{
//         disableDarkMode();
//     }
// });

// darkModeToggle2.addEventListener("click", () =>{
//     darkMode = localStorage.getItem("darkMode");
//     if(darkMode !== "enabled"){
//         enableDarkMode();
//     }else{
//         disableDarkMode();
//     }
// });

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggle2 = document.querySelector("#dark-mode-toggle2");

function enableDarkMode() {
    document.documentElement.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.documentElement.classList.remove("darkmode");
    localStorage.removeItem("darkMode");
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains("darkmode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Apply saved theme (mostly unnecessary because of the inline script,
// but useful as a fallback)
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

darkModeToggle?.addEventListener("click", toggleDarkMode);
darkModeToggle2?.addEventListener("click", toggleDarkMode);