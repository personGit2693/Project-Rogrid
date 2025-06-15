/*Import*/

/*Import*/ 


/*Controller*/
 

// Toggle dropdown menu visibility
 function controller_Click_PrescriptionDropDown(elemId) {

    const profileDropdownContainer = document.getElementById(elemId)
    const ar_ProfiledDropdownContent = profileDropdownContainer.querySelector('.ar-PrescriptFilter')


    if (ar_ProfiledDropdownContent.style.display === "flex") {
        ar_ProfiledDropdownContent.style.display = "none";
    } else {
        ar_ProfiledDropdownContent.style.display = "flex";
    }
}

       
/*Controller*/


/*Declare Global*/
window.controller_Click_PrescriptionDropDown = controller_Click_PrescriptionDropDown;
/*Declare Global*/


/*Export*/
export default controller_Click_PrescriptionDropDown;
/*Export*/
