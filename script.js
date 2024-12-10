const toggle_Btn = document.querySelector(".toggle_btn");
const toggle_Btn_Icon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");
toggle_Btn.addEventListener("click", () => {
  dropdown_menu.classList.toggle("active");
  const isActive = dropdown_menu.classList.contains("active");

  toggle_Btn_Icon.classList = isActive ? "fas fa-times" : "fas fa-bars";
});

new Swiper(".card-wrapper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
