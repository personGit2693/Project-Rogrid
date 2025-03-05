/* Import */
import { username, password } from './Elements_Index.js';
import {usernameValue, passwordValue, defaultUsername, defaultPassword} from './Values_Index.js';
/* Import */

/* Controller */
function controller_Btn_Login(event) {
    event.preventDefault(); // Prevent the default form submission
    
    /*const usernameValue = username.value;
    const passwordValue = password.value;

    // Default login credentials
    const defaultUsername = 'Ariel';
    const defaultPassword = 'password123'; */

    // Validate login
    if (usernameValue === defaultUsername && passwordValue === defaultPassword) {
        // Redirect to the profile page
        window.location.href = "./Module Feature/Pages/Page_Landing.php";
    } else {
        alert('Invalid username or password'); // Show an error message
    }
}
/* Controller */

/* Declare Global */
window.controller_Btn_Login = controller_Btn_Login;
/* Declare Global */

/* Export */
export default controller_Btn_Login;
/* Export */


