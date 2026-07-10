document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('[data-faq-item]');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq_trigger');
    const panel = item.querySelector('.faq_panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      faqItems.forEach(el => {
        el.classList.remove('active');
        const elPanel = el.querySelector('.faq_panel');
        const elTrigger = el.querySelector('.faq_trigger');

        if (elPanel) elPanel.style.maxHeight = null;
        if (elTrigger) elTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');

        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});
