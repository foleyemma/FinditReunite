// const nextButton = document.querySelector("#next-button");

// const prevButton = document.querySelector("#prev-button");

// let currentSlider = document.querySelector("#slider-img-1");

// nextButton.addEventListener("click", function () {
//   currentSlider.classList.toggle("hidden");
//   currentSlider = currentSlider.nextElementSibling;
//   currentSlider.classList.toggle("hidden");
// })

// prevButton.addEventListener("click", function () {
//     currentSlider.classList.toggle("hidden");
//     currentSlider = currentSlider.previousElementSibling;
//     currentSlider.classList.toggle("hidden");
// });


// let slideIndex = 0;
// const slides = document.querySelectorAll("#slider");
// const totalSlides = slides.length;

// function showSlides() {
//   slides.forEach(slide => {
//     slide.style.opacity = '0';
//   });

//   slideIndex++;
//   if (slideIndex > totalSlides) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].style.opacity = '1';
// }

// setInterval(showSlides, 5000); // Change slide every 5 seconds (5000 milliseconds)

const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
let currentSlider = document.querySelector("#slider-img-1");

function changeSlider() {
  setTimeout(() => {
    currentSlider.classList.toggle("hidden");
    if (currentSlider.nextElementSibling) {
      currentSlider = currentSlider.nextElementSibling;
    } else {
      currentSlider = document.querySelector("#slider-img-1");
    }
    currentSlider.classList.toggle("hidden");
    changeSlider(); // Recursively call changeSlider after 2 seconds
  }, 2000); // Change slide after 2 seconds (2000 milliseconds)
}

// Trigger the initial changeSlider function
changeSlider();

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


