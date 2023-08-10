new Swiper('.slider__block-1', {
  slidesPerView: 3,
  simulateTouch: true,
  navigation: {
    nextEl: '.slider-next-1',
    prevEl: '.slider-prew-1',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  on: {
    slideChange: function (swiper) {
      // используется параметр loop true (см. https://swiperjs.com/swiper-api#prop-swiper-realIndex)
      let activeIndex = swiper.realIndex;
      const prevCurrent = document.querySelector('.slider-prew-1');
      if (activeIndex === 0) {
        prevCurrent.style.display = 'none';
      } else {
        prevCurrent.style.display = 'block';
      }
    },
  },
  //   spaceBetween: 30,
});
new Swiper('.slider__block-2', {
  slidesPerView: 3,
  simulateTouch: true,
  navigation: {
    nextEl: '.slider-next-2',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  //   spaceBetween: 30,
});
new Swiper('.slider__block-3', {
  slidesPerView: 3,
  simulateTouch: true,
  navigation: {
    nextEl: '.slider-next-3',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  //   spaceBetween: 30,
});
