/*Import*/
import {myInput,item1} from "./Elements_Page_ShopNow.js";
/*Import*/


/*Controller*/
function controller_InputText_SearchItems(){

	let filter = myInput.value.toUpperCase();
	let li = item1.getElementsByTagName("li");

	let a, txtValue;

	for (let i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("span1")[0];
		txtValue = a.textContent || a.innerText;

		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_SearchItems = controller_InputText_SearchItems;
/*Declare Global*/


/*Export*/
export default controller_InputText_SearchItems;
/*Export*/