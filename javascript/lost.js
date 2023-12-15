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

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

let currentForm = document.querySelector("#where");


nextButton.addEventListener("click", function () {
    currentForm.classList.toggle("hidden");
    currentForm = currentForm.nextElementSibling;
    currentForm.classList.toggle("hidden");
});

prevButton.addEventListener("click", function () {
    currentForm.classList.toggle("hidden");
    currentForm = currentForm.previousElementSibling;
    currentForm.classList.toggle("hidden");
});




// nextButton.addEventListener("click", function (){
//     document.querySelector("#prev").removeAttribute('hidden');
// })

document.getElementById('next').addEventListener('click', function() {
    document.getElementById('prev').classList.remove('hidden');
});
