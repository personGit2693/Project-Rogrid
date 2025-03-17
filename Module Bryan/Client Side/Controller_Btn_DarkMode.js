/* Import */
import { darkModeButton } from './Elements_Global.js';
/* Import */

/* Controller */
function controller_Btn_DarkMode() {
    const body = document.body;

    // Get current mode from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode', !isDarkMode);

    // Get the image URLs from the data attributes
    const lightImg = darkModeButton.getAttribute('data-light-img');
    const darkImg = darkModeButton.getAttribute('data-dark-img');

    // Update the button's background image based on the current mode
    if (body.classList.contains('dark-mode')) {
        darkModeButton.style.backgroundImage = `url('${darkImg}')`;  // Dark mode image
    } else {
        darkModeButton.style.backgroundImage = `url('${lightImg}')`; // Light mode image
    }

    // Save the updated mode to localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}
/* Controller */

/* Declare Global */
window.controller_Btn_DarkMode = controller_Btn_DarkMode;
/* Declare Global */

/* Export */
export default controller_Btn_DarkMode;
/* Export */