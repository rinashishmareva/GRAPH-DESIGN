

const reviews_slider = document.querySelector('#reviews_slider');

const list_slider = document.querySelector('#list_slider');

//for list_slider
const list_slides = list_slider.querySelectorAll('.carousel-wrapper div');
const list_prev = document.querySelector('#list_prev');
const list_next = document.querySelector('#list_next');

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

list_next.addEventListener('click',list_goNext);
list_prev.addEventListener('click',list_goPrev);
//**********************************************
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