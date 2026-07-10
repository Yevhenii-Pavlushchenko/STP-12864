document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('[data-feat-track]');
  const slides = document.querySelectorAll('[data-feat-slide]');
  const dots = document.querySelectorAll('[data-feat-dot]');

  if (!track || slides.length === 0 || dots.length === 0) return;

  dots.forEach((dot, index) => {
    dot.setAttribute('data-slide', index);
  });

  const observerOptions = {
    root: track,
    threshold: 0.6,
  };

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
