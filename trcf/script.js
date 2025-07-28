// Existing modal and carousel functionality
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

const posters = document.querySelectorAll('.poster');
const dots = document.querySelectorAll('.indicators span');
let currentSlide = 0;
let autoSlideInterval;

function updateCarousel() {
  posters.forEach((poster, i) => {
    poster.classList.toggle('active', i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetInterval();
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % posters.length;
  updateCarousel();
}

function resetInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
  autoSlideInterval = setInterval(autoSlide, 5000);

  // Scroll-based animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
  entry.target.classList.add('visible');
} else {
  entry.target.classList.remove('visible');
}

    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

function updateLogoVisibility() {
  const leftLogo = document.querySelector('.global-left-logo');
  const rightLogo = document.querySelector('.global-right-logo');
  const homeSection = document.querySelector('#home');
  const rect = homeSection.getBoundingClientRect();

  if (rect.bottom > 100) {
    leftLogo.style.display = 'none';
    rightLogo.style.display = 'none';
  } else {
    leftLogo.style.display = 'block';
    rightLogo.style.display = 'block';
  }
}

document.addEventListener('scroll', updateLogoVisibility);
window.addEventListener('load', updateLogoVisibility);
window.addEventListener('resize', updateLogoVisibility);
