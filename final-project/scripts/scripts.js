document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});
