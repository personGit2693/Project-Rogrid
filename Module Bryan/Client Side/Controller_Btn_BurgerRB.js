/* Import */
import { burgerButton, burgerMenu } from './elements.js';
/* Import */

/* Controller */

function controller_Btn_BurgerRB() {
      
      // Toggle the active class to show/hide the nav
      menu.classList.toggle('active');
      
      if (menu.classList.contains('active')) {
        // Get the position of the burger menu
        const burgerRect = burger.getBoundingClientRect();
        
        // Position the nav below the burger
        menu.style.top = `${burgerRect.bottom + 10}px`;  // 10px below the burger
        menu.style.left = `${burgerRect.left}px`;        // Align with the left of the burger
      }
    }

/* Controller */


/* Declare Global */
window.controller_Btn_BurgerRB = controller_Btn_BurgerRB;
/* Declare Global */

/* Export */
export default controller_Btn_BurgerRB;
/* Export */