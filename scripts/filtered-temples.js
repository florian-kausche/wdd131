const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/800x500/Provo-City-Center-Temple08.jpg"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-updated').textContent = lastModified;

    function createTempleCard(temple) {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';
        
        templeCard.innerHTML = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;
        
        return templeCard;
    }

    function displayTemples(filterFn) {
        const gallery = document.getElementById('temple-gallery');
        gallery.innerHTML = ''; // Clear existing temples

        const filteredTemples = filterFn ? temples.filter(filterFn) : temples;
        filteredTemples.forEach(temple => {
            gallery.appendChild(createTempleCard(temple));
        });
    }

    function getYearFromDedicatedDate(dedicated) {
        return parseInt(dedicated.split(', ')[0]);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');

            switch (filter) {
                case 'old':
                    displayTemples(temple => getYearFromDedicatedDate(temple.dedicated) < 1900);
                    break;
                case 'new':
                    displayTemples(temple => getYearFromDedicatedDate(temple.dedicated) > 2000);
                    break;
                case 'large':
                    displayTemples(temple => temple.area > 90000);
                    break;
                case 'small':
                    displayTemples(temple => temple.area < 10000);
                    break;
                default:
                    displayTemples();
            }
        });
    });

    // Initial display
    displayTemples();
});
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu');
  const navLinks = document.querySelector('.nav-links');

  menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuButton.classList.toggle('open');
  });
});
