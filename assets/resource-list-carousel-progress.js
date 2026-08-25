document.querySelectorAll('[data-carousel-progress]').forEach((track) => {
  const root = track.closest('slideshow-component');
  const scroller = root && root.querySelector('slideshow-slides');
  const fill = track.querySelector('.resource-list-carousel__progress-fill');
  if (!scroller || !fill) return;

  const update = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const thumb = Math.min(1, Math.max(scroller.clientWidth / scroller.scrollWidth, 0.08));
    const pct = max > 0 ? scroller.scrollLeft / max : 0;

    fill.style.width = (thumb * 100) + '%';
    fill.style.transform = 'translateX(' + (pct * ((100 / thumb) - 100)) + '%)';
  };

  scroller.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
