document.addEventListener("DOMContentLoaded", (event) => {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            averageRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            averageRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            averageRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            averageRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            averageRating: 5.0
        }
    ];

    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Function to set the current year
    function setCurrentYear() {
        const currentYearSpan = document.getElementById('currentyear');
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    // Function to set the last modified date
    function setLastModified() {
        const lastModifiedParagraph = document.getElementById('lastModified');
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedParagraph.textContent = 'Last Modification: ' + lastModifiedDate.toLocaleString();
    }

    // Call the functions to set the dates
    setCurrentYear();
    setLastModified();
});

document.addEventListener("DOMContentLoaded", function() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("review-count").textContent = reviewCount;

  
});