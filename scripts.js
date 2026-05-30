/* Custom cursor — mouse/trackpad only */
if (window.matchMedia('(hover: hover)').matches) {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (cursor && ring) {
    let mx=0, my=0, rx=0, ry=0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    });
    (function loop() {
      rx += (mx - rx) * .12; ry += (my - ry) * .12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }
}

/* Hamburger nav overlay */
const hamburger    = document.getElementById('hamburger');
const navOverlay   = document.getElementById('nav-overlay');
const overlayClose = document.getElementById('overlay-close');
if (hamburger && navOverlay && overlayClose) {
  hamburger.addEventListener('click', () => navOverlay.classList.add('open'));
  overlayClose.addEventListener('click', () => navOverlay.classList.remove('open'));
  document.querySelectorAll('.overlay-link').forEach(l =>
    l.addEventListener('click', () => navOverlay.classList.remove('open'))
  );
}
