function toggleMenu() {
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.nav-toggle');

    menu.classList.toggle('open');
    btn.textContent = menu.classList.contains('open') ? '✖' : '☰';
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.nav-toggle');

    menu.classList.remove('open');
    btn.textContent = '☰';
}
