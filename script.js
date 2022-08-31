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

//Disable print screen
// document.addEventListener("keyup", function (e) {
//     var keyCode = e.keyCode ? e.keyCode : e.which;
//             if (keyCode == 44) {
//                 stopPrntScr();
//             }
//         });
// function stopPrntScr() {

//             var inpFld = document.createElement("input");
//             inpFld.setAttribute("value", ".");
//             inpFld.setAttribute("width", "0");
//             inpFld.style.height = "0px";
//             inpFld.style.width = "0px";
//             inpFld.style.border = "0px";
//             document.body.appendChild(inpFld);
//             inpFld.select();
//             document.execCommand("copy");
//             inpFld.remove(inpFld);
//         }
//        function AccessClipboardData() {
//             try {
//                 window.clipboardData.setData('text', "Access   Restricted");
//             } catch (err) {
//             }
//         }
//         setInterval("AccessClipboardData()", 300);



