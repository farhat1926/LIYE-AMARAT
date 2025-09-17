const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-left, .fade-right, .fade-up, .fade-in').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      alert('Artikel lengkap akan ditampilkan!');
    });
  });

let currentSlide = 0;
  const slides = document.getElementById('slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function updateQty(change) {
    const qtyEl = document.getElementById(currentSlide === 0 ? 'qty' : 'qty2');
    let qty = parseInt(qtyEl.innerText);
    qty = Math.max(1, qty + change);
    qtyEl.innerText = qty;
  }