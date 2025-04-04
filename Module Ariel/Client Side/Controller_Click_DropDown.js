 /*Import*/

/*Import*/ 


/*Controller*/
 

 document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.ar_ProfileDropdownContainer');

  // Handle clicking on each profile to toggle dropdown visibility
  dropdowns.forEach(dropdown => {
    const profile = dropdown.querySelector('.ar_ProfileDropdown');
    const dropdownContent = dropdown.querySelector('.ar-ProfiledDropdownContent');

    profile.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent this click from closing the dropdown immediately
      const isOpen = dropdownContent.style.display === 'block';
      // Close all dropdowns
      document.querySelectorAll('.ar-ProfiledDropdownContent').forEach(content => content.style.display = 'none');
      // Toggle the clicked dropdown if it wasn't already open
      if (!isOpen) {
        dropdownContent.style.display = 'block';
      }
    });
  });

  // Close all dropdowns when clicking anywhere outside
  document.addEventListener('click', function (event) {
    dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.ar-ProfiledDropdownContent');
      if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  });
});

       
/*Controller*/


/*Declare Global*/
window.controller_Click_DropDown = controller_Click_DropDown;
/*Declare Global*/


/*Export*/
export default controller_Click_DropDown;
/*Export*/
