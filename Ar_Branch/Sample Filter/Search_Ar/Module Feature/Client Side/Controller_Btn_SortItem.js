/*Import*/
import {clearItems,cartList,totalPrice} from "./Elements_Page_ShopNow.js";
import {sortOrder, cart, assignSortOrder} from "./Values_Feature.js";
import controller_Btn_AddToCart from "./Controller_Btn_AddToCart.js";
/*Import*/ 


/*Controller*/
function controller_Btn_SortItem() {
    if (sortOrder === 'asc') {
        cart.sort((a, b) => a.price - b.price);
        assignSortOrder("desc");
    } else {
        cart.sort((a, b) => b.price - a.price);
        assignSortOrder("asc");
    }
    
    controller_Btn_AddToCart();
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_SortItem = controller_Btn_SortItem;
/*Declare Global*/


/*Export*/
export default controller_Btn_SortItem;
/*Export*/