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
  }, 5000);
}





const scrollToTopButton = document.querySelector ('#scrollToTop')

 scrollToTopButton.addEventListener('click', function (){
    window.scrollTo({
        top: "0", behavior: 'smooth'
    })
 })



const navTogglerButton = document.querySelector ('#nav-toggler')

const openMenuIcon = document.querySelector ('#show-menu')

const closeMenuIcon = document.querySelector ('#hide-menu')

const mainMenu = document.querySelector ("#nav-drop")


navTogglerButton.addEventListener('click', function () {
    openMenuIcon.classList.toggle('hidden')
    closeMenuIcon.classList.toggle('hidden')
    mainMenu.classList.toggle('hidden')
})

const myButton = document.getElementById('myButton');

const Button2 = document.getElementById('button-2');
const Button3 = document.getElementById('button-3');
const Button4 = document.getElementById('button-4');
const Button5 = document.getElementById('button-5');
const Button6 = document.getElementById('button-6');
const Button7 = document.getElementById('button-7');
const Button8 = document.getElementById('button-8');
const Button9 = document.getElementById('button-9');



myButton.addEventListener('click', function() {
  myButton.classList.toggle('bg-[#519341]');
  myButton.classList.toggle('border-2');
  myButton.classList.toggle('text-white');

});

Button2.addEventListener('click', function() {
  Button2.classList.toggle('bg-[#519341]');
  Button2.classList.toggle('border-2');
  Button2.classList.toggle('text-white');

});
Button3.addEventListener('click', function() {
  Button3.classList.toggle('bg-[#519341]');
  Button3.classList.toggle('border-2');
  Button3.classList.toggle('text-white');

});


// Get the button element
const scrollButton = document.getElementById('scrollUp');

// Function to show or hide the button based on scroll position
function toggleScrollButton() {
  if (window.scrollY > 0) {
    scrollButton.classList.remove('hidden');
  } else {
    scrollButton.classList.add('hidden');
  }
}

// Add event listener for scrolling
window.addEventListener('scroll', toggleScrollButton);