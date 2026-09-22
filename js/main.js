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

//Progress bar function
function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100 + '%';
    // Update the progress variable to that total hight
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}
// Add event listener to the scroll
document.addEventListener('scroll', updateProgressBar);

//Initiate Gallery with card
// Open selected image
const galleryImages = document.querySelectorAll('.image-container img');
const popup = document.querySelector('.popup-image');
const popupImage = document.querySelector('.popup-image img');
const closeImageButton = document.querySelector('.popup-image span');

// Open selected image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.getAttribute('src');
        popupImage.alt = image.getAttribute('alt') || '';

        popup.style.display = 'block';
    });
});

// Close selected image
function closeImage() {
    popup.style.display = 'none';
    popupImage.src = '';
    popupImage.alt = '';
}

// Close with X button
if (closeImageButton) {
    closeImageButton.addEventListener('click', closeImage);
}

// Close with ESC key
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && popup.style.display === 'block') {
        closeImage();
    }
});
