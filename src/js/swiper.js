const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  slidesPerView: 1,
  speed: 700,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  on: {
    slideChange() {
      let ollSliders = this.slides.length,
        slIndex = this.realIndex + 1,
        numIndex = (slIndex <= 9) ? '0' : '',
        numOll = (ollSliders <= 9) ? '0' : '';
      this.el.parentNode.querySelector(".number-of-slides").innerHTML = numIndex.toString() + slIndex.toString();
    }
  }
});