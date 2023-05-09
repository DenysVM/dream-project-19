(() => {
  const mobileMenu = document.querySelector('.js-mob-menu');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // Add event listener for all anchor links on the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      // Check if the mobile menu is open
      if (mobileMenu.classList.contains('is-open')) {
        // Close the mobile menu
        toggleMenu();
      }
    });
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

      const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  slidesPerView: 1,
  speed: 500,
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