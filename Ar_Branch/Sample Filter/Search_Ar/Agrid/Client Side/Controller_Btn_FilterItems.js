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
