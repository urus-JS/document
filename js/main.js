
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.mobile__menu');
const input__name = document.querySelector('.input__name');
const label__input = document.querySelector('.label__input');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('mobile__menu--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});

input__name.addEventListener('click', () => {
  label__input.classList.toggle('boost');
});



const swiper = new Swiper('.swiper', {

   loop: true,
   slidesPerGroup: 1,
   speed: 800,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 3,
    },
    1110:{
      slidesPerView: 4,
    }
  },


});


