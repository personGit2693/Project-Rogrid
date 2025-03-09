/*Import*/
import {navigation} from "./Elements_Global.js";
import Navigation from "./Component_Navigation.js";
/*Import*/


/*Render*/
function viewNavigation(){
	
	navigation.innerHTML = Navigation();
}
/*Render*/


/*Export*/
export default viewNavigation;
/*Export*/