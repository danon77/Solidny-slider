const slider = document.querySelector(".slider");
const buttonLeft = document.querySelector(".arrow-left");
const buttonRight = document.querySelector(".arrow-right");
const sliderSlide = document.querySelectorAll(".slider__slide");
const sliderDotsLi = document.querySelectorAll(".slider-dots__li");

let checkIndex = 0;

function autoPlaySlide() {
    slider.style.transform = `translateX(-${checkIndex * 100}%)`;
}

function goToSlide(index) {
    checkIndex = index;
    autoPlaySlide();
}

function goNextSlide() {
    checkIndex = (checkIndex + 1) % sliderSlide.length;
    autoPlaySlide();

    for(let i = 0; i < sliderDotsLi.length; i++) {
        sliderDotsLi[i].classList.remove("active-dot");
    }
    sliderDotsLi[checkIndex].classList.add("active-dot");
}
buttonRight.addEventListener("click", goNextSlide);

function goPreSlide() {
    checkIndex = (checkIndex - 1 + sliderSlide.length) % sliderSlide.length;
    autoPlaySlide();

    for(let i = 0; i < sliderDotsLi.length; i++) {
        sliderDotsLi[i].classList.remove("active-dot");
    }
    sliderDotsLi[checkIndex].classList.add("active-dot");
}
buttonLeft.addEventListener("click", goPreSlide);

for (let i = 0; i < sliderDotsLi.length; i++) {
    sliderDotsLi[i].addEventListener("click", function() {
        for (let j = 0; j < sliderDotsLi.length; j++) {
            sliderDotsLi[j].classList.remove("active-dot");
        }
        
        goToSlide(i);
        this.classList.add("active-dot");
    });
}