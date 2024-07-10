const burger = document.querySelector('.hamburger');
const mobileContainer = document.querySelector('.mobile-container')
const body = document.querySelector('body')

function toggleClass() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overflow-hidden')
}

burger.addEventListener('click', toggleClass)


const swiperBanner = new Swiper('#banner-slider', {
    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        enabled: false
    },

    breakpoints: {
        // when window width is >= 320px
        1025: {
            spaceBetween: 50,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
    item.addEventListener('change', () => {
        const fileName = item.closest('.control-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})

const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

const swiperAdvantages = new Swiper('#advantages', {
    spaceBetween: 12,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        1025: {
            spaceBetween: 0,
            loop: false,
            slidesPerGroup: advantagesSlideLength,
            simulateTouch: false,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        }
    }
});

const swiperTemplate = new Swiper('.slider-template', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        enabled: false
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    
    breakpoints: {
        1025: {
            slidesPerView: 2,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            },
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        1140: {
            slidesPerView: 2,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            },
        },
        1300: {
            slidesPerView: 3,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            },
        }
    }
});



const sliderTemplate = document.querySelectorAll('.slider-template')

sliderTemplate.forEach(slider => {
    slider.closest('.container').classList.add('container-lg') 
    slider.closest('.container').classList.remove('container')
})


// const fileLable = document.querySelectorAll('.calculation-label');
// fileLable.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('special-gap'))