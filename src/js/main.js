// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";


const app = {
  init() {
    this.modules();
  },
  listeners() { },
  modules() {
    document.addEventListener('DOMContentLoaded', () => {
      var swiperBanner = new Swiper(".swiper-banner", {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: ".swiper-banner-pagination",
        },
      });
    });
  },
}.init();
