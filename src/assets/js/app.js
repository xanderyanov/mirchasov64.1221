$(function () {



    if ($(".tovar__slider").length) {
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            spaceBetween: 5,
            loop: false,
            effect: "slide",
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper(".gallery-top", {
            nextButton: ".swiper-button-next2",
            prevButton: ".swiper-button-prev2",
            spaceBetween: 5,
            loop: false,
            effect: "slide",
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }




    var mainSliderOptions = {

        paginationClickable: true,
        autoplay: 7500,
        spaceBetween: 0,
        loop: true,
        effect: "slide",
        autoplay: {
            delay: 15000,
            disableOnInteraction: true,
        },
        keyboard: true,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
            dynamicBullets: true,
            clickable: true,
        }
    };

    if ($(".swiper-container1").length) {
        var swiper = new Swiper(".swiper-container1", mainSliderOptions);
    }

});
