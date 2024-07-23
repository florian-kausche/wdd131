
// JavaScript
// Add the following JavaScript to handle the loader:

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');
    const loader = document.getElementById('loader');

    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open');
            menuButton.classList.remove('open');
        }
    });

    // Loader functionality
    window.addEventListener('load', function () {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    });

    // Transition to other pages
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            loader.classList.remove('hidden');
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});
