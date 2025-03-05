/*Import*/
import {clearItems,cartList,totalPrice} from "./Elements_Page_ShopNow.js";
/*Import*/ 


/*Controller*/
 function Controller_Btn_ClearCart() {
          cartList.innerHTML = "";
          totalPrice.innerHTML = "0";
        }
/*Controller*/


/*Declare Global*/
window.Controller_Btn_ClearCart = Controller_Btn_ClearCart;
/*Declare Global*/


/*Export*/
export default Controller_Btn_ClearCart;
/*Export*/