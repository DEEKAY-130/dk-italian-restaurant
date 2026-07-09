const menuIcon = document.querySelector('.menu-icon');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');


menuIcon.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});


closeMenu.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});


menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove('active');
  }
});

const reserveBtn = document.querySelector('.reserve-btn');
const bookingOverlay = document.getElementById('bookingOverlay');
const closeBooking = document.getElementById('closeBooking');

// Toggle booking module view state
reserveBtn.addEventListener('click', () => {
  bookingOverlay.classList.add('active');
});

closeBooking.addEventListener('click', () => {
  bookingOverlay.classList.remove('active');
});

bookingOverlay.addEventListener('click', (e) => {
  if (e.target === bookingOverlay) {
    bookingOverlay.classList.remove('active');
  }
});


document.querySelectorAll('.nav-item-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menuOverlay').classList.remove('active');
  });
});


const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');


window.addEventListener('DOMContentLoaded', () => {
  const isCookieAccepted = localStorage.getItem('dkCookiesAccepted');
  
  if (!isCookieAccepted) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1500); // Pops up gently 1.5 seconds after loading
  }
});


acceptCookiesBtn.addEventListener('click', () => {
  cookieBanner.classList.remove('show');
  localStorage.setItem('dkCookiesAccepted', 'true');
});

const rejectCookiesBtn = document.getElementById("rejectCookiesBtn");

rejectCookiesBtn.addEventListener("click", () => {
    cookieBanner.classList.remove("show");
});