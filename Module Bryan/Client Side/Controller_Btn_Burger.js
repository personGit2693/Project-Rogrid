/* Import */
import { burgerRB, navContainerRB } from './Elements_Global.js';

/* Controller for burger icon (keeps your previous behavior) */
function controller_Btn_Burger() {
    const burger = burgerRB ?? document.getElementById('burgerRB');
    const navContainer = navContainerRB ?? document.querySelector('.nav-containerRB');
    if (!burger || !navContainer) return;

    navContainer.classList.toggle('active');
    burger.textContent = burger.textContent === '☰' ? '✖' : '☰';
}




/* Expose controller globally and export as before */
window.controller_Btn_Burger = controller_Btn_Burger;
export default controller_Btn_Burger;
