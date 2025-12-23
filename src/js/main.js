// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";


const app = {
  init() {
    this.modules();
  },
  listeners() { },
  modules() {
    document.addEventListener('DOMContentLoaded', () => {
      var swiperBanner = new Swiper(".swiper-banner", {
        direction: "horizontal",
        loop: true,
        speed: 600,
        pagination: {
          el: '.swiper-banner-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
        on: {
          resize: function () {
            this.updateAutoHeight(300);
          }
        }
      });


      const btnMobile = document.querySelector('.btn-mobile');
      const mobileMenu = document.querySelector('.header-mobile-menu')
      if (btnMobile && mobileMenu) {
        btnMobile.addEventListener('click', () => {
          btnMobile.classList.toggle('open')
          mobileMenu.classList.toggle('open')
        })
      }
    });
  },
}.init();
