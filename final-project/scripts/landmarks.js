document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const menuButton = document.getElementById('menu');
    const navLinks = document.getElementById('nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Initial landmarks data
    let landmarks = JSON.parse(localStorage.getItem('landmarks')) || [
        { name: 'Independence Arch', img: 'images/independence-arch.jpg', desc: 'A symbol of Ghana\'s independence, the arch is located in Black Star Square.', link: 'https://en.wikipedia.org/wiki/Independence_Arch' },
        { name: 'Nkrumah Mausoleum', img: 'images/kwame-nkrumah-mausoleum.jpg', desc: 'The final resting place of Ghana\'s first President, surrounded by scenic gardens.', link: 'https://knmp.gov.gh/' },
        { name: 'Osu Castle', img: 'images/osu-castle.jpg', desc: 'A historic fort located on the coast, offering a glimpse into Ghana\'s colonial past.', link: 'https://www.ghanamuseums.org/forts/fort-christianburg.php' },
        { name: 'National Theatre', img: 'images/national-theatre.jpg', desc: 'A striking modern building that hosts various cultural events and performances.', link: 'https://www.nationaltheatre.gov.gh/' },
        { name: 'Jamestown Lighthouse', img: 'images/jamestown-lighthouse.jpg', desc: 'A historic lighthouse providing panoramic views of the city and the Gulf of Guinea.', link: 'https://artsandculture.google.com/story/the-jamestown-lighthouse-hacsa-foundation/tgVxDXAVQMCByQ?hl=en' },
        { name: 'Aburi Botanical Gardens', img: 'images/aburi-botanical-gardens.jpg', desc: 'A lush green space perfect for picnics and nature walks, located in the Eastern Region of Ghana.', link: 'https://en.wikipedia.org/wiki/Aburi_Botanical_Gardens' },
        { name: 'Centre for National Culture', img: 'images/art-center.jpg', desc: 'A bustling marketplace for arts, crafts, and souvenirs, reflecting Ghanaian culture and heritage.', link: 'https://ghanaculture.gov.gh/' },
        { name: 'Legon Botanical Gardens', img: 'images/legon-botanical-gardens.webp', desc: 'A serene park with lush gardens, a canopy walkway, and various recreational activities.', link: 'https://legonbotanicalgardens.com/' }
    ];

    const landmarksList = document.getElementById('landmarksList');
    const nameInput = document.getElementById('landmarkName');
    const descInput = document.getElementById('landmarkDesc');
    const imgInput = document.getElementById('landmarkImg');
    const linkInput = document.getElementById('landmarkLink');
    const addLandmarkBtn = document.getElementById('addLandmarkBtn');

    function renderLandmarks() {
        landmarksList.innerHTML = '';
        landmarks.forEach((landmark, index) => {
            if (isValidLandmark(landmark)) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${landmark.img}" alt="${landmark.name}" loading="lazy">
                    <h3>${landmark.name}</h3>
                    <p>${landmark.desc}</p>
                    <a href="${landmark.link}" target="_blank"><button>Read More</button></a>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
                landmarksList.appendChild(card);
            }
        });
        attachDeleteEvent();
    }

    function isValidLandmark(landmark) {
        return landmark && landmark.name && landmark.img && landmark.desc && landmark.link;
    }

    function attachDeleteEvent() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removeLandmark(index);
            });
        });
    }

    function removeLandmark(index) {
        if (index >= 0 && index < landmarks.length) {
            landmarks.splice(index, 1);
            localStorage.setItem('landmarks', JSON.stringify(landmarks));
            renderLandmarks();
        } else {
            console.error('Invalid index for removing landmark');
        }
    }

    function addLandmark(newLandmark) {
        if (newLandmark && isValidLandmark(newLandmark)) {
            if (landmarks.some(landmark => landmark.name.toLowerCase() === newLandmark.name.toLowerCase())) {
                alert('Landmark already exists!');
            } else {
                landmarks.push(newLandmark);
                localStorage.setItem('landmarks', JSON.stringify(landmarks));
                renderLandmarks();
            }
        } else {
            alert('Invalid landmark data.');
        }
    }

    addLandmarkBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const desc = descInput.value.trim();
        const img = imgInput.value.trim();
        const link = linkInput.value.trim();
        
        if (name && desc && img && link) {
            const newLandmark = {
                name,
                img,
                desc,
                link
            };
            addLandmark(newLandmark);
            nameInput.value = '';
            descInput.value = '';
            imgInput.value = '';
            linkInput.value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    renderLandmarks();
});
