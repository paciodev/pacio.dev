setInterval(function () {
  const show = document.querySelector('.hero-animation[data-show]');
  const next = show?.nextElementSibling
    ? show.nextElementSibling
    : document.querySelector('.hero-animation:first-child');
  const up = document.querySelector('.hero-animation[data-up]');

  if (up) {
    up.removeAttribute('data-up');
  }

  if (show) {
    show.removeAttribute('data-show');
    show.setAttribute('data-up', '');
  }

  if (next) {
    next.setAttribute('data-show', '');
  }
}, 3000);
