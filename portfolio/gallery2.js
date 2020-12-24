//slidesPerView

new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });