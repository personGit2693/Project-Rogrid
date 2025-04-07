/*Import*/

/*Import*/ 


/*Controller*/

function controller_Click_ImageModal() {
      const modal = document.querySelector('.ar_Modal');
      const modalImage = document.querySelector('.img01');
      const closeButton = document.querySelector('.close');
      const thumbnail = document.querySelector('.ar_ModalImg');

      // Check if the modal is currently displayed
      if (modal.style.display === "block") {
          // If the modal is already visible, close it
          modal.style.display = "none";
      } else {
          // If the modal is not visible, open it
          modal.style.display = "block";
          modalImage.src = thumbnail.src; // Set the image source to the clicked thumbnail
      }

      // Close the modal when the close button is clicked
      closeButton.onclick = function() {
          modal.style.display = "none";
      }
  }
/*Controller*/


/*Declare Global*/
window.controller_Click_ImageModal = controller_Click_ImageModal;
/*Declare Global*/


/*Export*/
export default controller_Click_ImageModal;
/*Export*/