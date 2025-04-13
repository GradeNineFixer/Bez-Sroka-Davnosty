const swiper = new Swiper('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows (по желанию)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar (по желанию)
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
