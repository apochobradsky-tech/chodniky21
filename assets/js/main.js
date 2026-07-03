const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('img');
const closeBtn = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = button.dataset.full;
    lightboxImg.alt = button.querySelector('img')?.alt || 'Fotka realizace';
    lightbox.hidden = false;
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.hidden = true;
  lightboxImg.src = '';
}

closeBtn?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
