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

let mobileCta = document.querySelector('.mobile-cta');
const contactSection = document.querySelector('#poptavka');
const mobileQuery = window.matchMedia('(max-width: 980px)');

if (!mobileCta && contactSection) {
  mobileCta = document.createElement('div');
  mobileCta.className = 'mobile-cta';
  mobileCta.setAttribute('aria-hidden', 'true');
  mobileCta.innerHTML = '<a class="btn btn-primary" href="#poptavka">Chci novou dlažbu</a>';
  document.body.append(mobileCta);
}

function updateMobileCta() {
  if (!mobileCta || !contactSection) return;

  const contactRect = contactSection.getBoundingClientRect();
  const nearContact = contactRect.top < window.innerHeight * 0.85 && contactRect.bottom > 120;
  const shouldShow = mobileQuery.matches && window.scrollY > 360 && !nearContact;

  mobileCta.classList.toggle('is-visible', shouldShow);
  mobileCta.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
  document.body.classList.toggle('has-mobile-cta', mobileQuery.matches);
}

window.addEventListener('scroll', updateMobileCta, { passive: true });
window.addEventListener('resize', updateMobileCta);
mobileQuery.addEventListener?.('change', updateMobileCta);
updateMobileCta();
