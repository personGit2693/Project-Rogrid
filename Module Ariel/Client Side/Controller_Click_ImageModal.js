/*Import*/
import { modal, modalImage, closeButton } from './Element_Page_ImageModal.js';
/*Import*/ 


/*Controller*/

function controller_Click_ImageModal(elemId) {
    
    const thumbnail = document.getElementById(elemId)

      // Check if the modal is currently displayed
      if (modal.style.display === "block") {
          // If the modal is already visible, close it
          modal.style.display = "none";
      } else {
          // If the modal is not visible, open it
          modal.style.display = "block";
          modalImage.src = thumbnail.src; // Set the image source to the clicked thumbnail
      }
  }
/*Controller*/


/*Declare Global*/
window.controller_Click_ImageModal = controller_Click_ImageModal;
/*Declare Global*/


/*Export*/
export default controller_Click_ImageModal;
/*Export*/
