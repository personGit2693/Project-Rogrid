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

/* Helpers */
function closeAllOpen() {
    document.querySelectorAll('.dropdownRB.open, .submenuRB.open').forEach(el => {
        el.classList.remove('open');
    });
}

function resetMobileNav() {
    // close dropdowns/submenus and reset burger/nav state
    closeAllOpen();

    const navContainer = navContainerRB ?? document.querySelector('.nav-containerRB');
    const burger = burgerRB ?? document.getElementById('burgerRB');

    if (navContainer && navContainer.classList.contains('active')) {
        navContainer.classList.remove('active');
    }
    if (burger && burger.textContent !== '☰') {
        burger.textContent = '☰';
    }
}

/* Init click toggles & outside-click listener AFTER DOM ready */
document.addEventListener('DOMContentLoaded', () => {
    // dropdown toggles (buttons)
    const dropdownButtons = Array.from(document.querySelectorAll('.nav-itemRB > button'));
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // only toggle on mobile widths
            if (window.innerWidth <= 1180) {
                e.preventDefault();
                const dropdown = button.nextElementSibling; // expected <ul class="dropdownRB">
                if (dropdown) {
                    dropdown.classList.toggle('open');
                }
            }
        });
    });

    // submenu toggles (li that contains .submenuRB)
    const dropdownLis = Array.from(document.querySelectorAll('.dropdownRB > li'));
    dropdownLis.forEach(li => {
        const link = li.querySelector('a');
        const submenu = li.querySelector('.submenuRB');
        if (submenu && link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1180) {
                    e.preventDefault();
                    submenu.classList.toggle('open');
                }
            });
        }
    });

    // close open menus if user taps/clicks outside nav (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1180) {
            const navContainer = navContainerRB ?? document.querySelector('.nav-containerRB');
            // if click target is not inside nav container, close open menus
            if (navContainer && !navContainer.contains(e.target)) {
                closeAllOpen();
            }
        }
    });
});

/* Resize/orientation handler:
   When switching to desktop width, remove all mobile-open states so submenus won't be stuck */
function onViewportChange() {
    if (window.innerWidth >= 1180) {
        // Going to desktop — reset any mobile-open states
        resetMobileNav();
    }
}

window.addEventListener('resize', onViewportChange, { passive: true });
window.addEventListener('orientationchange', onViewportChange);

/* Expose controller globally and export as before */
window.controller_Btn_Burger = controller_Btn_Burger;
export default controller_Btn_Burger;
