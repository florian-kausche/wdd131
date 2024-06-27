

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
