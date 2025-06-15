/*Import*/

/*Import*/ 


/*Controller*/
let sortOrder = {
    date: 'asc',
    name: 'asc'
};

function controller_Btn_FilterItems(attribute) {
    // Prevent sorting if attribute is not allowed
    if (!sortOrder.hasOwnProperty(attribute)) return;

    const productList = document.getElementById('product-list');
    const items = Array.from(productList.children);
    
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

    // Toggle sort order for next click
    sortOrder[attribute] = sortOrder[attribute] === 'asc' ? 'desc' : 'asc';

    // Re-append sorted items
    productList.innerHTML = '';
    items.forEach(item => productList.appendChild(item));
}

/*Controller*/


/*Declare Global*/
window.controller_Btn_FilterItems = controller_Btn_FilterItems;
/*Declare Global*/


/*Export*/
export default controller_Btn_FilterItems;
/*Export*/
