

// CAROUSEL SLIDES

const carouselSliders = document.querySelectorAll(".carousel-slide");

carouselSliders.forEach(carousel => {

let slideIndex = 0;
let autoSlideTimeout;
showSlides();

function plusSlides(n) {
  clearTimeout(autoSlideTimeout);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoSlideTimeout);
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let i;
  let slides = carousel.getElementsByClassName("sliders");
  let dots = carousel.getElementsByClassName("dot");
  
  // Handle out-of-bounds
  if (n >= slides.length) { slideIndex = 0; }    
  if (n < 0) { slideIndex = slides.length - 1; }
  
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.remove("slide-in", "slide-out-right", "slide-out-left");
  }

  // Reset dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].classList.add("slide-in");
  dots[slideIndex].className += " active";
  
  autoSlideTimeout = setTimeout(() => {
    plusSlides(1);
  }, 3000); 
}
})

// --------------------------------------------








// Our services slider

const multiCarousel = document.querySelectorAll(".dark-slider-container");

multiCarousel.forEach(multiCa => {

    
const carousel = multiCa.querySelector('.slider-div');
const slidee = multiCa.querySelectorAll('.slider');
let sliding = 0;
let slideInterval = setInterval(nextSlide, 3000);

// Calculate the initial offset for the carousel
function calculateOffset(index) {
  return slidee[index].offsetLeft - carousel.offsetWidth / 2 + slidee[index].offsetWidth / 2;
}

// Set the initial scroll position
carousel.scrollLeft = calculateOffset(sliding);

function nextSlide() {
  // Move to the next slide in sequence, wrapping around if needed
  sliding = (sliding + 1) % slidee.length;
  
  // Update the scroll position
  carousel.scroll({
    left: calculateOffset(sliding),
    behavior: 'smooth'
  });
}

function prevSlide() {
  // Move to the previous slide in sequence, wrapping around if needed
  sliding = (sliding - 1 + slidee.length) % slidee.length;
  
  // Update the scroll position
  carousel.scroll({
    left: calculateOffset(sliding),
    behavior: 'smooth'
  });
}

// Recalculate the offset of the carousel when the window is resized
window.addEventListener('resize', () => {
  carousel.scrollLeft = calculateOffset(sliding);
});


})
















//side-bar code
var menu =document.getElementById("menu-btn");
var bar= document.getElementById("side-bar");
var nav = document.getElementById("home");

menu.addEventListener("click", function(){

    bar.classList.toggle("noside-bar");
    nav.classList.toggle("fixed");
    bar.style.transition="1s ease";
})

