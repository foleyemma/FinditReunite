// navBar background on scroll
// const nav = document.querySelector('nav');

// let lastScrollTop = 0;
// window.addEventListener('scroll', function() {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
//   if (currentScroll > lastScrollTop) {
//     // Scrolling down
//     nav.classList.add('show-background');
//   } else {
//     // Scrolling up
//     nav.classList.remove('show-background');
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });

const nav = document.querySelector('nav');

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    nav.classList.add('show-background');
  } else {
    // Scrolling up
    if (currentScroll <= 0) {
      // At the top of the page, 
      nav.classList.remove('show-background', 'backdrop-filter');
    } else {
      nav.classList.add('show-background', 'backdrop-filter');
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// const nextButton = document.querySelector("#next-button");
// const prevButton = document.querySelector("#prev-button");
// let currentSlider = document.querySelector("#slider-img-1");

// function changeSlider() {
//   setTimeout(() => {
//     currentSlider.classList.toggle("hidden");
//     if (currentSlider.nextElementSibling) {
//       currentSlider = currentSlider.nextElementSibling;
//     } else {
//       currentSlider = document.querySelector("#slider-img-1");
//     }
//     currentSlider.classList.toggle("hidden");
//     changeSlider(); // Recursively call changeSlider after 5 seconds
//   }, 5000);
// }

// Trigger the initial changeSlider function
changeSlider();


const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
let currentSlider = document.querySelector("#slider-img-1");


nextButton.addEventListener("click", function () {
  currentSlider.classList.toggle("hidden");
  if (currentSlider.nextElementSibling) {
    currentSlider = currentSlider.nextElementSibling;
  } else {
    currentSlider = document.querySelector("#slider-img-1");
  }
  currentSlider.classList.toggle("hidden");
});

prevButton.addEventListener("click", function () {
  currentSlider.classList.toggle("hidden");
  if (currentSlider.previousElementSibling) {
    currentSlider = currentSlider.previousElementSibling;
  } else {
    const slides = document.querySelectorAll(".slider-img");
    currentSlider = slides[slides.length - 1];
  }
  currentSlider.classList.toggle("hidden");
});

function changeSlider() {
  setTimeout(() => {
    currentSlider.classList.add("animate-move-left"); // Apply slide animation
    currentSlider.classList.add("translate-x-full"); // Move slide to left

    setTimeout(() => {
      currentSlider.classList.add("hidden"); // Hide the current slide after animation
      currentSlider.classList.remove("animate-move-left", "translate-x-full"); 

      if (currentSlider.nextElementSibling) {
        currentSlider = currentSlider.nextElementSibling;
      } else {
        currentSlider = document.querySelector("#slider-img-1");
      }
      
      currentSlider.classList.remove("hidden")
      changeSlider(); // Recursively call changeSlider after 5 seconds
    }, 500); // Adjust this timing to match the animation duration
  }, 500000);
}

const navTogglerButton = document.querySelector ('#nav-toggler')

const openMenuIcon = document.querySelector ('#show-menu')

const closeMenuIcon = document.querySelector ('#hide-menu')

const mainMenu = document.querySelector ("#nav-drop")


navTogglerButton.addEventListener('click', function () {
    openMenuIcon.classList.toggle('hidden')
    closeMenuIcon.classList.toggle('hidden')
    mainMenu.classList.toggle('hidden')
})