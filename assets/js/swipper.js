function initSwiperWhenVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!swiper) {
        var swiper = new Swiper("#testimonials-slider .swiper", {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
        });
      }
      observer.unobserve(entry.target);
    }
  });
}

var observer = new IntersectionObserver(initSwiperWhenVisible, { threshold: 0.5 });

observer.observe(document.querySelector("#testimonials-slider"));
