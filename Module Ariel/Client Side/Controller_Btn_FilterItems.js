/*Import*/

/*Import*/ 


/*Controller*/

let sortOrder = {
    name: 'asc',
    date: 'asc'
};

function controller_Btn_FilterItems(attribute) {
      const list = document.querySelector(".ar-prescriptionList");
      const items = Array.from(list.children);

      items.sort((a, b) => {
        let valueA = a.getAttribute(`data-${attribute}`);
        let valueB = b.getAttribute(`data-${attribute}`);

        if (attribute === 'date') {
          valueA = new Date(valueA);
          valueB = new Date(valueB);
        }

        if (sortOrder[attribute] === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });

      items.forEach(item => list.appendChild(item));

      // Toggle sort order for next click
      sortOrder[attribute] = sortOrder[attribute] === 'asc' ? 'desc' : 'asc';
    }
/*Controller*/


/*Declare Global*/
window.controller_Btn_FilterItems = controller_Btn_FilterItems;
/*Declare Global*/


/*Export*/
export default controller_Btn_FilterItems;
/*Export*/
