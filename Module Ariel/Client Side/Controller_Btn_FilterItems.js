/*Import*/

/*Import*/ 


/*Controller*/
let sortOrder = {
    price: 'asc',
    date: 'asc',
    name: 'asc'
};

function controller_Btn_FilterItems(attribute) {
    const productList = document.getElementById('product-list');
    const items = Array.from(productList.children);
    
    items.sort((a, b) => {
        let valueA = a.getAttribute(`data-${attribute}`);
        let valueB = b.getAttribute(`data-${attribute}`);

        if (attribute === 'price' || attribute === 'date') {
            valueA = attribute === 'price' ? parseFloat(valueA) : new Date(valueA);
            valueB = attribute === 'price' ? parseFloat(valueB) : new Date(valueB);
        }

        if (sortOrder[attribute] === 'asc') {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
        } else {
            if (valueA > valueB) return -1;
            if (valueA < valueB) return 1;
        }
        return 0;
    });

    sortOrder[attribute] = sortOrder[attribute] === 'asc' ? 'desc' : 'asc';

    productList.innerHTML = '';
    items.forEach(item => productList.appendChild(item));
}

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    toggleSortOrder('price'); // Initial sort by price ascending on load
});

/*Controller*/


/*Declare Global*/
window.controller_Btn_FilterItems = controller_Btn_FilterItems;
/*Declare Global*/


/*Export*/
export default controller_Btn_FilterItems;
/*Export*/
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

      // Close the modal when the background (modal) is clicked
      window.onclick = function(event) {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      }
  }