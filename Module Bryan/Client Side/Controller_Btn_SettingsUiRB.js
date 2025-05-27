/* Import */
import { toggleGroups } from './Elements_Global.js';  // Ensure this import path is correct
/* Import */

/* Controller */
function controller_Btn_SettingsUiRB() {
   // Ensure toggleGroups is available and contains the correct elements
   if (!toggleGroups || toggleGroups.length === 0) {
      console.error('No toggle groups found.');
      return;
   }

   toggleGroups.forEach(group => {
      group.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {
            // Remove 'active-RB' class from all buttons in this group
            group.querySelectorAll('button').forEach(btn => btn.classList.remove('active-RB'));

            // Add 'active-RB' class to the clicked button
            e.target.classList.add('active-RB');
         }
      });
   });
}
/* Controller */

/* Declare Global */
window.controller_Btn_SettingsUiRB = controller_Btn_SettingsUiRB;  // Expose new function name globally
/* Declare Global */

/* Export */
export default controller_Btn_SettingsUiRB;
/* Export */