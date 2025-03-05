/*Import*/
import {cartList,totalPrice} from "./Elements_Page_ShopNow.js";
import {cart, assignTotal, total} from "./Values_Feature.js";
/*Import*/


/*Controller*/
function controller_Btn_AddToCart(product, price) {

    if(product == undefined && price == undefined){
        totalPrice.textContent = total;
    }else{
        const existingProduct = cart.find(item => item.product === product);
        if (existingProduct) {
            existingProduct.quantity++;
            existingProduct.totalPrice += price;
        } else { 
            cart.push({product, price, quantity: 1, totalPrice: price});
        }

        assignTotal(price);        
                
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.totalPrice} (${item.quantity})`;
            cartList.appendChild(li);
        });
    }
}
     
/*Controller*/


/*Declare Global*/
window.controller_Btn_AddToCart = controller_Btn_AddToCart;
/*Declare Global*/


/*Export*/
export default controller_Btn_AddToCart;
/*Export*/
