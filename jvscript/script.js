// ======= MENU RESPONSIVO =======

// Seleciona o botão e o menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abre e fecha o menu quando clica no botão ☰
toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Fecha o menu quando clica em um link
const links = document.querySelectorAll('.menu-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
