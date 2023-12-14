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
