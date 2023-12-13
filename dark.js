const toggleButton = document.getElementById('toggle-mode');
let darkMode = false;

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    updateMode();
});

function updateMode() {
    document.body.classList.toggle('dark-mode', darkMode);
    toggleButton.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
}