

//for list_slider
const l_slider = document.querySelector('#list_slider');
const list_slides = l_slider.querySelectorAll('.carousel-wrapper div');
const list_prev = l_slider.querySelector('#list_prev');
const list_next = l_slider.querySelector('#list_next');

for (let index = 0; index < list_slides.length; index++) {
    const element = list_slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
list_slides[0].style.opacity = "1";

let list_loop = 0 + 1000*list_slides.length;  
function list_goNext(){
    list_loop++;
    animate(list_slides, list_loop);
}

function list_goPrev(){
    list_loop--;
    animate(list_slides, list_loop);
}

list_next.addEventListener('click', list_goNext);
list_prev.addEventListener('click', list_goPrev);

//for reviews_slider

const r_slider = document.querySelector('#reviews_slider');
const reviews_slides = r_slider.querySelectorAll('.carousel-wrapper div');
const reviews_prev = r_slider.querySelector('#reviews_prev');
const reviews_next = r_slider.querySelector('#reviews_next');

for (let index = 0; index < reviews_slides.length; index++) {
    const element = reviews_slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
reviews_slides[0].style.opacity = "1";

let reviews_loop = 0 + 1000*reviews_slides.length;  
function reviews_goNext(){
    reviews_loop++;
    animate(reviews_slides, reviews_loop);
}

function reviews_goPrev(){
    reviews_loop--;
    animate(reviews_slides, reviews_loop);
}

reviews_next.addEventListener('click',reviews_goNext);
reviews_prev.addEventListener('click',reviews_goPrev);



function animate(slider_arr, loop) {
  for (let index = 0; index < slider_arr.length; index++) {
    const element = slider_arr[index];
    const percent = 100 * (index - loop % slider_arr.length);
    element.style.transform = `translateX(${percent}%)`;

    if (percent == 0) {
        element.style.opacity = "1"
    } else {
        element.style.opacity = "0"
    }
  }
}

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close'); 
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());