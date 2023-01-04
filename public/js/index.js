const swiper_slide_show = new Swiper('.swiper-slideshow', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

const swiper_popular = new Swiper('.swiper-popular', {
    slidesPerView: 5,
    spaceBetween: 50,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
});

const swiper_movies = new Swiper('.swiper-movies', {
    slidesPerView: 5,
    spaceBetween: 50,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
});
const swiper_top_airing = new Swiper('.swiper-top-airing', {
    slidesPerView: 5,
    spaceBetween: 50,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
});