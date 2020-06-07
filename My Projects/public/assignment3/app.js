const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevb = document.querySelector('#prevb');
const nextb = document.querySelector('#nextb');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + ' px) ';

nextb.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselSlide.style.transform = ' translateX(' + (-size * counter) + 'px) ';
});

prevb.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlide.style.transform = ' translateX(' + (-size * counter) + 'px) ';
});

carouselSlide.addEventListener('transitionend',() => {
    if(carouselImages[counter].id === 'lastclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = ' translateX(' + (-size * counter) + 'px) ';
    }
    if(carouselImages[counter].id === 'firstclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = ' translateX(' + (-size * counter) + 'px) ';
    }
});