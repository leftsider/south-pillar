// Annotation drawer toggle.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.annotation-toggle');
  const drawer = document.querySelector('.annotation-drawer');
  const closeBtn = document.querySelector('.annotation-drawer__close');
  if (!toggle || !drawer) return;
  toggle.addEventListener('click', () => drawer.classList.toggle('is-open'));
  closeBtn?.addEventListener('click', () => drawer.classList.remove('is-open'));
  // Close drawer on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') drawer.classList.remove('is-open');
  });
});
