/*Import*/

/*Import*/ 


/*Controller*/
 

// Toggle dropdown menu visibility
 function controller_Click_DropDown(elemId) {

    const profileDropdownContainer = document.getElementById(elemId)
    const ar_ProfiledDropdownContent = profileDropdownContainer.querySelector('.ar-ProfiledDropdownContent')


    if (ar_ProfiledDropdownContent.style.display === "flex") {
        ar_ProfiledDropdownContent.style.display = "none";
    } else {
        ar_ProfiledDropdownContent.style.display = "flex";
    }
}

       
/*Controller*/


/*Declare Global*/
window.controller_Click_DropDown = controller_Click_DropDown;
/*Declare Global*/


/*Export*/
export default controller_Click_DropDown;
/*Export*/
