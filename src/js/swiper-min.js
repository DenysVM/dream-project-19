const swiper = new Swiper('.mySwyper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      Keyboard: {
        enabled: true,
      },
      pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });