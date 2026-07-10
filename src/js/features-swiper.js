document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.feat_slider-track');
  const slides = document.querySelectorAll('.feat_card');
  const dots = document.querySelectorAll('.feat_dot');
  const btnPrev = document.querySelector('.feat_ctrl-btn[data-hiw-prev]');
  const btnNext = document.querySelector('.feat_ctrl-btn[data-hiw-next]');

  if (!track || slides.length === 0) return;

  const scrollToSlide = index => {
    if (index >= 0 && index < slides.length) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = 20;
      track.scrollTo({
        left: index * (slideWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  btnPrev?.addEventListener('click', () => {
    const activeDot = document.querySelector('.feat_dot.active');
    const currentIndex = parseInt(activeDot?.dataset.slide || '0', 10);
    scrollToSlide(currentIndex - 1);
  });

  btnNext?.addEventListener('click', () => {
    const activeDot = document.querySelector('.feat_dot.active');
    const currentIndex = parseInt(activeDot?.dataset.slide || '0', 10);
    scrollToSlide(currentIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.setAttribute('data-slide', index);
    dot.addEventListener('click', e => {
      const targetIndex = parseInt(e.currentTarget.dataset.slide, 10);
      scrollToSlide(targetIndex);
    });
  });

  const observerOptions = { root: track, threshold: 0.6 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slideIndex = Array.from(slides).indexOf(entry.target);
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === slideIndex);
        });
      }
    });
  }, observerOptions);

  slides.forEach(slide => observer.observe(slide));
});
