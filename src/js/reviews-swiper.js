document.addEventListener('DOMContentLoaded', () => {
  let reviewsSwiper = null;

  function initReviewsSlider() {
    const isMobile = window.matchMedia('(max-width: 1439px)').matches;

    if (isMobile) {
      // Инициализируем Swiper только на мобильных устройствах
      if (!reviewsSwiper) {
        reviewsSwiper = new Swiper('.rev_swiper', {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
          grabCursor: true,
        });
      }
    } else {
      // Уничтожаем Swiper на десктопе, чтобы работал CSS Grid
      if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
      }
    }
  }

  initReviewsSlider();
  window.addEventListener('resize', initReviewsSlider);
});
