const burger = document.querySelector('.hamburger');
const mobileContainer = document.querySelector('.mobile-container')
const body = document.querySelector('body')

function toggleClass() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overflow-hidden')
}

burger.addEventListener('click', toggleClass)


const swiper = new Swiper('.banner-slider', {
    loop: true,
    spaceBetween: 50,
     
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});