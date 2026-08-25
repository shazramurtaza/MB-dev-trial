document.addEventListener('click', (event) => {
  const button = event.target.closest('.product-card-wishlist');
  if (!button) return;

  const pressed = button.getAttribute('aria-pressed') === 'true';
  button.setAttribute('aria-pressed', String(!pressed));
});
