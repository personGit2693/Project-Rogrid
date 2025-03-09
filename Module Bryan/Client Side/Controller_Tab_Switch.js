/* Controller */
function controller_Tab_Switch(index) {
    const contents = document.querySelectorAll('.RBTP-content');
    const tabs = document.querySelectorAll('.RBTP-tab');

    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    contents[index].classList.add('active');
    tabs[index].classList.add('active');
}
/* Controller */

/* Declare Global */
window.controller_Tab_Switch = controller_Tab_Switch;
/* Declare Global */

/* Export */
export default controller_Tab_Switch;
/* Export */