/*Import*/
import { burgerRB, navContainerRB } from './Elements_Global.js';
/*Import*/

/* Controller */
function controller_Btn_Burger() {
    if (!burgerRB || !navContainerRB) return;

    navContainerRB.classList.toggle('active');

    // Toggle icon ☰ ↔ ✖
    burgerRB.textContent = burgerRB.textContent === '☰' ? '✖' : '☰';
}
/* Controller */

/* Declare Global */
window.controller_Btn_Burger = controller_Btn_Burger;
/* Declare Global */

/* Export */
export default controller_Btn_Burger;
/* Export */
