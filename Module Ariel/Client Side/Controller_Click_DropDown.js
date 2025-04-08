 /*Import*/

/*Import*/ 


/*Controller*/
 

  // Toggle dropdown menu visibility
const optionsMenu = document.querySelector(".ar-ProfiledDropdownContent");

         function controller_Click_DropDown() {
            if (optionsMenu.style.display === "flex") {
                optionsMenu.style.display = "none";
            } else {
                optionsMenu.style.display = "flex";
            }
        }
        // Close dropdown menu if clicked outside
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".ar_ProfileDropdownContainer")) {
                optionsMenu.style.display = "none";
            }
        });

       
/*Controller*/


/*Declare Global*/
window.controller_Click_DropDown = controller_Click_DropDown;
/*Declare Global*/


/*Export*/
export default controller_Click_DropDown;
/*Export*/
