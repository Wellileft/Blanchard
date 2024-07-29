(() => {
  const swiperHero = new Swiper('.js-hero-swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

  const swiperGallery = new Swiper('.js-gallery-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
    pagination: {
      el: ".gallery__pagination",
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    a11y: {
      prevSlideMessage: 'Перейти к предыдущему слайду',
      nextSlideMessage: 'Перейти к следующему слайду'
    },

    breakpoints: {
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      }
    },
  });

  const swiperEvents = new Swiper('.js-events-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    navigation: {
      nextEl: '.events__btn-next',
      prevEl: '.events__btn-prev',
    },
    pagination: {
      el: '.js-swiper-pagination',
      clickable: true,
    },

    a11y: {
      prevSlideMessage: 'Перейти к предыдущему слайду',
      nextSlideMessage: 'Перейти к следующему слайду',
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },

    breakpoints: {
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50
      },

      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      }
    },
  });

  const swiperProjects = new Swiper('.js-projects-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.projects__btn-next',
      prevEl: '.projects__btn-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    a11y: {
      prevSlideMessage: 'Перейти к предыдущему слайду',
      nextSlideMessage: 'Перейти к следующему слайду'
    },

    breakpoints: {
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 48
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      }
    },
  });

})();
