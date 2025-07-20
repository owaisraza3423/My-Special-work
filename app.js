var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true, // infinite loop
    autoplay: {
      delay: 2000, // har 3 second baad slide change hoga
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
  });