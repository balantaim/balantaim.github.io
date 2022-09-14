//Toggle Day/Night mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggle2 = document.querySelector("#dark-mode-toggle2");

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

darkModeToggle2.addEventListener("click", () =>{
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

//Swiper JS
const swiper = new Swiper('.swiper', {
	loop: true,
    lazy: true,
    speed: 1800,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,

    effect: 'creative',
	creativeEffect: {
		prev: {
			// will set `translateZ(-400px)` on previous slides
			translate: [0, 0, -400],
		},
		next: {
			// will set `translateX(100%)` on next slides
			translate: ['100%', 0, 0],
		},
	},
});

