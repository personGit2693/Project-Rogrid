/*Import*/
import {elements_Array} from "Elements_Sample.js";
import {popElemsKey, element_keyHolder_Obj} from "Values_Sample.js";
import renderComponent from "Render_Component.js";
/*Import*/


/*Controller*/
function controller_Sample_RenderElement(){

	resetElemsKey(element_keyHolder_Obj);

	if(elements_Array.length === 0){
		
		renderComponent()
		.then(promiseRender => {			

			popElemsKey(element_keyHolder_Obj, elements_Array);

			/*Another render if any*/			
		});		
	}else if(elements_Array.length > 0){

		popElemsKey(element_keyHolder_Obj, elements_Array);

		renderComponent()
		.then(promiseRender => {			
			
			/*Another render if any*/			
		});	
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_Sample_RenderElement = controller_Sample_RenderElement;
/*Declare Global*/


/*Export*/
export default controller_Sample_RenderElement;
/*Export*/