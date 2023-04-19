const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = container.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.carousel-control-prev');
const nextBtn = carousel.querySelector('.carousel-control-next');
let currentIndex = 0;
let translateX = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    translateX += items[currentIndex].clientWidth + 20;
    container.style.transform = `translateX(-${translateX}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    translateX -= items[currentIndex].clientWidth + 20;
    container.style.transform = `translateX(-${translateX}px)`;
  }
});
