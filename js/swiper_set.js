const swiper = new Swiper('.myswiper1', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {


    },
    slideChangeTransitionEnd: function () {
      gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});



      setTimeout(function () {
        $(".gsap_text_two").show(0);
        $(".gsap_text_two").addClass('animate__animated typewriter_two');
      }, 1000);
    }
  },

});