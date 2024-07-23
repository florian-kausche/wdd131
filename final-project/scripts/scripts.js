document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navLinks = document.querySelector('header nav ul');

    menuButton.addEventListener('click', function () {
        // Toggle the 'open' class on both the menu button and the navigation links
        navLinks.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

    window.addEventListener('resize', function () {
        // If the window width is greater than 768px, make sure the menu is closed
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open');
            menuButton.classList.remove('open');
        }
    });
});
