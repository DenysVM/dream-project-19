const swiper = new Swiper('.mySwyper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      Keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });