// Function to show a specific section
function showSection(sectionId) {
    // Hide all tab content sections
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Initialize by showing the Overview tab
document.addEventListener("DOMContentLoaded", function() {
    showSection('overview');
});
